import { memo } from "react";
import './styles.scss';
import { FaTrash } from 'react-icons/fa';

type financeType ={
    id: number;
    description: string;
    value: number;
    type: string;
}

const fincance: financeType[] = [
    {
        id: 1,
        description: "Mercado",
        value: 57.00,
        type: "entrada",
    },
    {
        id: 2,
        description: "Mercado",
        value: 50.00,
        type: "saida",
    },
    {
        id: 3,
        description: "Mercado",
        value: 57.00,
        type: "entrada",
    },
    {
        id: 4,
        description: "Mercado",
        value: 50.00,
        type: "saida",
    },
    {
        id: 1,
        description: "Mercado",
        value: 57.00,
        type: "entrada",
    },
    {
        id: 2,
        description: "Mercado",
        value: 50.00,
        type: "saida",
    }
];

function Feed(){
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
                {fincance.map((item) => (
                    <div key={item.id} className="fincance-box">
                        <div className="title-type">
                            <h3>{item.description}</h3>
                            <p style={item.type === "entrada" ? {color: '#1E33EB'} : {color: '#AF1C1C'}}>{item.type}</p>
                        </div>
                        <div className="value-btn">
                            <h3 style={item.type === "entrada" ? {color: '#1E33EB'} : {color: '#AF1C1C'}}>{item.type === "entrada" ? `R$ ${item.value}` : `- R$ ${item.value}`}</h3>
                            <div className="trash-btn">
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