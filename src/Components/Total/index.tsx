import { memo } from "react";
import './styles.scss';


function Total(){
    return(
        <div className="total">
            <div className="total__text-box">
                <h3>Valor Total:</h3>
                <p>Esse valor se refere ao saldo.</p>
            </div>
            <h3>R$ 50 reais</h3>
        </div>
    )
}

export default memo(Total);