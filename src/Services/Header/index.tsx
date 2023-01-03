import { memo } from "react";
import logo from '../../assets/logo.svg';
import './styles.scss';


function Header(){
    return(
        <header>
            <img src={logo} alt="logo moneyflow" />
        </header>
    )
}
export default memo(Header);