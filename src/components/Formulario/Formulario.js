import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Button from "../button/Button.js";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };

        console.log(datosAEnviar);
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
            tittle='Nombre' 
            placeholder='Ingresar nombre' 
            required 
            valor={nombre} 
            setValor={setNombre}/>

            <CampoTexto 
            tittle='Puesto' 
            placeholder='Ingresar puesto' 
            required 
            valor={puesto} 
            setValor={setPuesto}/>

            <CampoTexto 
            tittle='Foto' 
            placeholder='Ingresar enlace de foto' 
            required 
            valor={foto} 
            setValor={setFoto}/>

            <ListaOpciones 
                valor={equipo}
                setEquipo={setEquipo}
            />
            <Button>Crear</Button>
        </form>
        
    </section>
}

export default Formulario