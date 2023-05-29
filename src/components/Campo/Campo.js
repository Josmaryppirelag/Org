import { useState } from 'react';
import './Campo.css';
const Campo = (props) => {

    const [valor, setValor] = useState('');
    const placeholderModificado = `${props.placeholder}...`;

    //Destruct

    const {type = 'text'} = props

    console.log(props.type)

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{ props.tittle }</label>
        <input 
            placeholder= { placeholderModificado } 
            required= {props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;