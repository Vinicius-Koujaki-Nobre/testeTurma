import style from './Calcs.module.css'
import { useState, useEffect } from 'react'

export default function Calcs(){
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMulti, setRespMulti] = useState()
    const [respDiv, setRespDiv] = useState()

    const somar = () => setRespSoma(parseFloat(n1) + parseFloat(n2))
    const sub = () => setRespSub(parseFloat(n1) - parseFloat(n2))
    const multi = () => setRespMulti(parseFloat(n1) * parseFloat(n2))
    const div = () => setRespDiv(parseFloat(n1) / parseFloat(n2))

    const handleAll = (a,b) => {
        setRespSoma(parseFloat(a) + parseFloat(b))
        setRespSub(parseFloat(a) - parseFloat(b))
        setRespMulti(parseFloat(a) * parseFloat(b))
        setRespDiv(parseFloat(a) / parseFloat(b))
    }

    useEffect(() => {
        setRespSoma(parseFloat(n1) + parseFloat(n2))
        setRespSub(parseFloat(n1) - parseFloat(n2))
        setRespMulti(parseFloat(n1) * parseFloat(n2))
        setRespDiv(parseFloat(n1) / parseFloat(n2))
    }, [n1, n2])




    return(
        <>
            <h5><a href={"/"} className={style.backBtn}>voltar</a></h5>
            <h1>Cálculo</h1>
            <br />
            <div>
                <h4>Insira as notas para calcular as médias</h4>
                <input type="number" value={n1} onChange={((e) => setN1(e.target.value))} placeholder='1° nota' />
                <input type="number" value={n2} onChange={((e) => setN2(e.target.value))} placeholder='2° nota' />
            </div>
            <div>
                <h4>Respostas</h4>
                <p>
                    <button onClick={somar}>Somar</button>
                    {!isNaN(respSoma) ? respSoma : "Digite números válidos"}
                </p>
                <p>
                    <button onClick={sub}>Subtrair</button>
                    {!isNaN(respSub) ? respSub : "Digite números válidos"}
                </p>
                <p>
                    <button onClick={multi}>Multiplicar</button>
                    {!isNaN(respMulti) ? respMulti : "Digite números válidos"}
                </p>
                <p>
                    <button onClick={div}>Dividir</button>
                    {n2 === "0" ? "Erro ao dividir por 0"
                    : !isNaN(respDiv) && isFinite(respDiv) ? respDiv 
                    : "Digite números válidos"}
                </p>
                <br />
                <button onClick={() => handleAll(n1, n2)}>Calcular todas</button>
            </div>

        </>
    )
}