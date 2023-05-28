import { useState } from 'react';
import './CampoTexto.css';
const CampoTexto = (props) => {

    const [valor,setValor] = useState('');
    const placeholderModificado = `${props.placeholder}...`;

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className='campo-texto'>
        <label>{ props.tittle }</label>
        <input 
            placeholder= { placeholderModificado } 
            required= {props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto;