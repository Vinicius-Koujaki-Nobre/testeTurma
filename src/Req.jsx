import { useState } from 'react'
import style from './Req.module.css'
import { useEffect } from 'react'
import { api } from './api/api'
import { Card } from './components/card'

export default function Req(){

    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")

    const [erro, setErro] = useState(false)

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
                setErro(true)
            }
            console.error(error)
        })
    }, [page, searchName])




    return(
        <section className={style.wrapPage}>
            <h1>Rick and Morty API</h1>

            <input className={style.input} type="text" placeholder='Digite uma página (1/42)' value={page} onChange={(e) => setPage(e.target.value)} />
            <input className={style.input} type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)} />

            {erro && <p>Página não encontrada</p>}

            <div className={style.wrapCards}>
                {data.map((item,index) => (
                    <div key={index}>
                        <Card name={item.name} image={item.image}/>
                    </div>
                ))}
            </div>
        </section>
    )
}