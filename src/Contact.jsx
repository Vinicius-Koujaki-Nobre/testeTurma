import style from './Contact.module.css'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Menu } from './components/menu';
import { Loading } from './components/spinner';
import { useState, useEffect } from 'react';

function Contact() {

    const [loading, setLoading] = useState(false)
    const [cep, setCep] = useState("80510-070")
    const [latitude, setLatitude] = useState("-25.424847")
    const [longitude, setLongitude] = useState("-49.2749795")
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [estado, setEstado] = useState("")
    const [localidade, setLocalidade] = useState("")
    
    const position = [latitude, longitude]

    function handleCap(e){
        setCep(e.target.value)
    }

    function ChangeView({center}){
        const map = useMap()
        map.setView(center, 15)
        return null
    }

    useEffect(() => {
        const sanitizedCep = cep.replace(/\D/g, "")

        if(sanitizedCep.length !== 8) return

        setLoading(true)

        fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`)
            .then((res) => res.json())
            .then((data) => {

                if(data.erro){
                    console.warn("CEP não encontrado")
                    setLoading(false)
                    return
                }

                const {logradouro, localidade, uf, bairro, estado } = data
                setBairro(bairro)
                setRua(logradouro)
                setEstado(estado)
                setLocalidade(localidade)
                const address = `${logradouro ? logradouro + ', ' : ''}${localidade}, ${uf}`
                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
                    .then((response) => response.json())
                    .then((locationData) => {

                        if(locationData.length > 0){
                            const { lat, lon } = locationData[0]
                            setLatitude(parseFloat(lat))
                            setLongitude(parseFloat(lon))
                        } else {
                            console.warn("coordenadas não encontradas")
                        }

                        setLoading(false)
                    }).catch(error => {
                        console.error("Erro ao buscar coordenadas: ", error)
                        setLoading(false)
                    })


                setLoading(false)

            }).catch(error => {
                console.error("erro ao buscar CEP: ", error)
                setLoading(false)
            })
    }, [cep])

    return (
        <>
        <Menu option01='Voltar a página principal'/>
            <h2 className={style.tt}>Mapa</h2>
            <br />
            <input type="text" placeholder='Insira o seu CEP' onChange={handleCap} />
            {bairro} - {rua} - {estado} - {localidade}
            <br />
            <br />
            {loading ? <Loading/> : 
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "auto", minHeight: "900px"}}>
                <ChangeView center={position}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <a target='_blank' rel='noopener noreferrer' 
                        href={`https://www.google.com/maps/search/?api=1$query=${latitude},${longitude}`}>
                            Abrir no google Maps
                        </a>
                    </Popup>
                </Marker>
            </MapContainer>
            }
        </>
    )
}

export default Contact