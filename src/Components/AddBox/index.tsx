import { memo, useContext } from "react"
import { FinanceContext } from "../../Context/FinanceContext";
import Input from "../Input";
import './styles.scss';


function AddBox(){

    const { setDescription, description, value, setValue, type, setType, handleSubmit } = useContext(FinanceContext);

    return(
        <div className="sidebar">
            <form onSubmit={handleSubmit}>
                <div className="description">
                    <label htmlFor="description">Descrição</label>
                    <Input id="description" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <p>Ex: Comprar roupas.</p>
                </div>
                <div className="value-type">
                    <div className="value">
                        <label htmlFor="value" title="prencha usando somente numeros" >Valor</label>
                        <Input id="value" placeholder="R$" value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <div className="type">
                        <label htmlFor="select">Tipo</label>
                        <select id="select" onChange={(e) => setType(e.target.value)}>
                            <option>Entrada</option>
                            <option>Saída</option>
                        </select>
                    </div>
                </div>
                <button>Confirmar</button>
            </form>
        </div>
    )
}

export default memo(AddBox);