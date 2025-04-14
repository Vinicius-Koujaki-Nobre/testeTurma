import style from './Media.module.css'
import { useState, useEffect } from 'react'

export default function Media(){
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    const [n4, setN4] = useState(0)
    const [n5, setN5] = useState(0)
    const [respMedia, setRespMedia] = useState()

    useEffect(() => {
        setRespMedia((parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5)
    }, [n1, n2, n3, n4, n5])

    return(
        <>
            <h5><a href={"/"} className={style.backBtn}>voltar</a></h5>
            <h1>Notas</h1>
            <br />
            <div>
                <h4>Insira as notas para calcular as médias</h4>
                <input type="number" value={n1} onChange={((e) => setN1(e.target.value))} placeholder='1° nota' />
                <input type="number" value={n2} onChange={((e) => setN2(e.target.value))} placeholder='2° nota' />
                <input type="number" value={n3} onChange={((e) => setN3(e.target.value))} placeholder='3° nota' />
                <input type="number" value={n4} onChange={((e) => setN4(e.target.value))} placeholder='4° nota' />
                <input type="number" value={n5} onChange={((e) => setN5(e.target.value))} placeholder='5° nota' />
            </div>
            <div>
                <h4>Média</h4>
                <p>
                    Sua média é: 
                    {n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10 || n5 > 10 ? "Nota superior a 10 adicionada" 
                    : n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 || n5 < 0 ? "Nota inferior a 0 adicionada"
                    : !isNaN(respMedia) ? respMedia : "Digite notas válidas"}
                </p>
            </div>
        </>
    )
}