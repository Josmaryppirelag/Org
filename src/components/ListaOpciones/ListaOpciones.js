import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    //return <option>})



    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.setEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipo.map((equipo, index) => <option key={index}value={equipo}>{equipo}</option>) }
        </select>
    </div>
}

export default ListaOpciones