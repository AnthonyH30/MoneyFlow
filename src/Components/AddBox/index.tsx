import { memo } from "react"
import Input from "../Input";
import './styles.scss';


function AddBox(){
    return(
        <div className="sidebar">
            <form>
                <div className="description">
                    <label>Descrição</label>
                    <Input placeholder="Descrição" />
                    <p>Ex: Comprar roupas.</p>
                </div>
                <div className="value-type">
                    <div className="value">
                        <label>Valor</label>
                        <Input placeholder="R$" />
                    </div>
                    <div className="type">
                        <label>Tipo</label>
                        <select>
                            <option selected >Entrada</option>
                            <option>Saida</option>
                        </select>
                    </div>
                </div>
                <button>Confirmar</button>
            </form>
        </div>
    )
}

export default memo(AddBox);