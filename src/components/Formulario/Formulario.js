import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo/Campo.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Button from "../button/Button.js";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };

        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            tittle='Nombre' 
            placeholder='Ingresar nombre' 
            required 
            valor={nombre} 
            setValor={setNombre}/>

            <Campo 
            tittle='Puesto' 
            placeholder='Ingresar puesto' 
            required 
            valor={puesto} 
            setValor={setPuesto}/>

            <Campo 
            tittle='Foto' 
            placeholder='Ingresar enlace de foto' 
            required 
            valor={foto} 
            setValor={setFoto}/>

            <ListaOpciones 
                valor={equipo}
                setEquipo={setEquipo}
                equipo={props.equipo}
            />
            <Button>Crear</Button>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
            tittle='Titulo' 
            placeholder='Ingresar titulo' 
            required 
            valor={titulo} 
            setValor={setTitulo}/>

            <Campo 
            tittle='Color' 
            placeholder='Ingresar color en Hex' 
            required 
            valor={color} 
            setValor={setColor}
            type="color"
            />
            <Button>
                Registrar equipo
            </Button>
    </form>
    </section>
}

export default Formulario