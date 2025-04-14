import style from './Imc.module.css'
import { useState, useEffect } from 'react'

export default function Imc(){
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc]  =useState(0)

    useEffect(() => {
        setImc(parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)))
    }, [peso, altura])

    return(
        <>
            <h5><a href={"/"} className={style.backBtn}>voltar</a></h5>
            <h1>Seja bem-vindo</h1>
            <br />
            <div>
                <h4>Insira seu peso e sua altura</h4>
                <p>Peso:</p>
                <input type="number" value={peso} onChange={((e) => setPeso(e.target.value))} placeholder='Peso' />
                <br />
                <p>Altura:</p>
                <input type="number" value={altura} onChange={((e) => setAltura(e.target.value))} placeholder='Altura' />
            </div>
            <div>
                <h4>IMC</h4>
                <p>
                    Seu peso IMC é de:
                    {imc > 40 ? imc + ", Você apresenta obesidade de 3° grau" 
                    : imc >= 35 && imc <= 40 ? imc + ", Você apresenta obesidade de 2°grau" 
                    : imc >= 30 && imc <= 34.9 ? imc + ", Você apresenta obesidade de 1° grau" 
                    : imc >= 25 && imc <= 29.9 ? imc + ", Você apresenta sobrepeso"
                    : imc >= 18.6 && imc <= 24.9 ? imc + ", Você apresenta um peso normal"
                    : imc <= 18.5 ? imc + ", Você apresenta um peso abaixo do normal"
                    : altura === "0" ? "Erro ao dividir por 0"
                    : !isNaN(imc) && isFinite(imc) ? imc : ", Digite notas válidas"}
                </p>
            </div>
        </>
    )
}