import { memo } from "react";
import './styles.scss';
type MyInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function Input({placeholder, style}: MyInputProps){
    return <input type='text' style={style} placeholder={placeholder}/>
}

export default memo(Input);