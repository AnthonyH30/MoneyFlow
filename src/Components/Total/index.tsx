import { memo, useContext } from "react";
import { FinanceContext } from "../../Context/FinanceContext";
import './styles.scss';


function Total(){

    const { total } = useContext(FinanceContext);

    return(
        <div className="total">
            <div className="total__text-box">
                <h3>Valor Total:</h3>
                <p>Esse valor se refere ao saldo.</p>
            </div>
            <h3 style={total >= 0 ? {color: "Blue"} : {color: "Red"}}>{total} R$</h3>
        </div>
    )
}

export default memo(Total);