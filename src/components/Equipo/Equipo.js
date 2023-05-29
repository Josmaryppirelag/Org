import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.js";
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
    //destructuracion
    const {titulo, colorPrimario, colorSecundario, id } = props.datos;
    const {colaboradores, deleteColab, actColor, like } = props;

    const objColor = {
        backgroundColor: hexToRgba(colorPrimario, 0.6),
    };
    
    const estiloTitulo = { borderColor: colorSecundario };

    return <>{colaboradores.length > 0 && <section className="equipo" style={objColor}>
            <input
                className="input-color"
                type="color"
                value={colorPrimario}
                onChange={(event) =>{
                    actColor(event.target.value, id)
                }}
            />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map( (colaborador,index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                deleteColab={deleteColab}
                like={like}
                />)
            }
        </div>
    </section>}
    </>
}

export default Equipo