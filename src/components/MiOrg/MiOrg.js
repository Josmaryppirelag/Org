import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
console.log(props);
    //Estado - Hooks
    //useState
    //useState()
//const [nombre, funcionQueActualiza] = useState(valorInicial)
    //const [mostrar, actualizarMostrar] = useState(true);

    //const manejarClick = () => {
      //  console.log('mostrar/ocultar elementos', !mostrar)
        //actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="tittle">Mi Organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;