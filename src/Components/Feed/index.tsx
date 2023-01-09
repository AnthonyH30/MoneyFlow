import { memo, useContext } from "react";
import './styles.scss';
import { FaTrash } from 'react-icons/fa';
import { FinanceContext } from "../../Context/FinanceContext";

function Feed(){

    const { finance, handleDelete } = useContext(FinanceContext);

    return(
        <div className="feed">
            <div className="title-n-buttons">
                <h2 className="title">Resumo financeiro</h2>
                <div className="btns">
                    <button>Todos</button>
                    <button>Entradas</button>
                    <button>Saidas</button>
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
            </section>
        </div>
    )
}
export default memo(Feed);