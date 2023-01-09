import { memo } from "react";
import './styles.scss';
type MyInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function Input({placeholder, style, onChange, value, id}: MyInputProps){
    return <input id={id} type='text' style={style} placeholder={placeholder} onChange={onChange} value={value}/>
}

export default memo(Input);