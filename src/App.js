import { useState, useTransition } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './components/Formulario/Formulario.js';
import Header from './components/header/Header.js';
import MiOrg from './components/MiOrg/MiOrg.js';
import Equipo from './components/Equipo/Equipo.js';
import Footer from './components/footer/Footer.js';

function App() {
const [mostrarForm,actualizarMostrar] = useState(false)
const [colaboradores, setColaboradores] = useState([{

  id: uuid(),
  equipo: "Programación",
  foto: "https://github.com/genesysaluralatam.png",
  nombre:"Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  fav: true,
},
{

  id: uuid(),
  equipo: "Programación",
  foto: "https://github.com/christianpva.png",
  nombre:"Christian Velazco",
  puesto: "Head de Alura e instructor",
  fav: false,
},
{

  id: uuid(),
  equipo: "Front-End",
  foto: "https://github.com/harlandlohora.png",
  nombre:"Harland Lohora",
  puesto: "Instructor",
  fav: false,
},
{

  id: uuid(),
  equipo: "UX y Diseño",
  foto: "https://github.com/JeanmarieAluraLatam.png",
  nombre:"Christian Velazco",
  puesto: "Instructora en Alura Latam",
  fav: false,
},
{

  id: uuid(),
  equipo: "Innovación y Gestión",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre:"Jose Gonzalez",
  puesto: "Dev. FullStack",
  fav: false,
}])

const [equipo, setEquipo] = useState([

    { id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
]) 

  //ternario --> ? seMuestra : no se muestrA

  const cambiarMostrar = ( ) => {
    actualizarMostrar(!mostrarForm);
  }

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log ('nuevo colaborador', colaborador);
    setColaboradores([...colaboradores, colaborador]);
    //Spread operator
  }

  //Eliminar colaborador

  const deleteColab = (id) => {
    console.log("eliminar colab", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !==id)
    setColaboradores(nuevosColaboradores)
  }

  //Act color
  const actColor = (color, id) =>{
    const equiposActualizados = equipo.map((equipo) => {
        if (equipo.id === id) {
          equipo.colorPrimario = color
        }

        return equipo
    })
  setEquipo(equiposActualizados);

  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    setEquipo([...equipo, {...nuevoEquipo, id: uuid() }])
  }

  //like

  const like = (id) => {
    const likeAColab = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    setColaboradores(likeAColab)
  }

  return (
    <div className="App">
      <Header />
      {
        mostrarForm && <Formulario 
        equipo={equipo.map((equipo)=> equipo.titulo)}
            registrarColaborador = {registrarColaborador}
            crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
        {
          equipo.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          deleteColab={deleteColab}
          actColor={actColor}
          like={like}
          />)
          
        }

        <Footer/>
      
    </div>

  );
}

export default App;
