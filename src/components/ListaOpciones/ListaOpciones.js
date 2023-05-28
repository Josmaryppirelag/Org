import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    //return <option>})

    const equipos = [
        "Programación",
        "Front-End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ];

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.setEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { equipos.map((equipos, index) => <option key={index}value={equipos}>{equipos}</option>) }
        </select>
    </div>
}

export default ListaOpciones