import type { ButtonProps } from "./Button.types";

function Button({ text, onClick, disabled}: ButtonProps){
    return <button onClick={onClick} disabled={disabled} >{text}</button>
}

export default Button