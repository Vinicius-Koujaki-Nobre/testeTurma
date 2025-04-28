import style from './modalInfo.module.css'

export const ModalInfo = ({data, close}) => {
    return(
        <div className={style.div}>
            <button className={style.button} onClick={close}>❌</button>
            <img src={data.image} alt={data.name} />
            <h3><strong>Name: </strong>{data.name}</h3>
            <p><strong>Status: </strong>{data.status}</p>
            <p><strong>Origin: </strong>{data.origin.name}</p>
            <p><strong>Species: </strong>{data.species}</p>
            <p><strong>Gender: </strong>{data.gender}</p>
            <p><strong>Location: </strong>{data.location.name}</p>
            <p><strong>Created: </strong>{new Date(data.created).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            })}</p>
        </div>
    )
}