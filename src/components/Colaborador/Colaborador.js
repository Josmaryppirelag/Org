import "./Colaborador.css";
import { AiOutlineDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, deleteColab, like } = props

    return <div className="colaborador" style={{backgroundColor: colorPrimario}}> 
        <AiOutlineDelete className="eliminar" onClick={() => deleteColab(id)}/>
        <div className="encabezado" ></div>
        <img src={foto} alt={nombre}/>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
            
        </div>

    </div>
}

export default Colaborador