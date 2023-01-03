import { memo } from "react";
import './styles.scss';


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
        </div>
    )
}
export default memo(Feed);