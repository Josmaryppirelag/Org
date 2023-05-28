import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.js";

const Equipo = (props) => {
    //destructuracion
    const {titulo, colorPrimario, colorSecundario } = props.datos;
    const {colaboradores} = props

    const objColor = {
        backgroundColor: colorSecundario,
    };
    
    const estiloTitulo = { borderColor: colorPrimario };

    return <>{colaboradores.length > 0 && <section className="equipo" style={objColor}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map( (colaborador,index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                />)
            }
        </div>
    </section>}
    </>
}

export default Equipo