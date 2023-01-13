import { memo, useContext, useRef } from "react";
import './styles.scss';
import { FaTrash } from 'react-icons/fa';
import { FinanceContext } from "../../Context/FinanceContext";

function Feed(){

    const { finance, handleDelete, setCurrentSelected, currentSelected } = useContext(FinanceContext);

    const btns = ["Todos", "Entradas", "Saidas"];

    return(
        <div className="feed">
            <div className="title-n-buttons">
                <h2 className="title">Resumo financeiro</h2>
                <div className="btns">
                    {btns.map(item => <button style={currentSelected == item ? {backgroundColor: "blue"} : {}} onClick={() => setCurrentSelected(item)} key={item}>{item}</button>)}
                </div>
            </div>
            <section className="section-finance">
                {finance.map((item) => (
                    <div key={item.id} className="fincance-box">
                        <div className="title-type">
                            <h3>{item.description}</h3>
                            <p style={item.type === "Entrada" ? {color: '#1E33EB'} : {color: '#AF1C1C'}}>{item.type}</p>
                        </div>
                        <div className="value-btn">
                            <h3 style={item.type === "Entrada" ? {color: '#1E33EB'} : {color: '#AF1C1C'}}>{item.type === "Entrada" ? `R$ ${item.value}` : `- R$ ${item.value}`}</h3>
                            <div className="trash-btn" onClick={() => handleDelete(item.id)}>
                                <FaTrash color="black" size={15} />
                            </div>
                        </div>
                    </div>
                ))}
                {finance.length ? <p></p> :<p className="nofound">Nenhum registro encontrado...</p>}
            </section>
        </div>
    )
}
export default memo(Feed);