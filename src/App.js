import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario.js';
import Header from './components/header/Header.js';
import MiOrg from './components/MiOrg/MiOrg.js';
import Equipo from './components/Equipo/Equipo.js';
import Footer from './components/footer/Footer.js';

function App() {
  const [mostrarForm,actualizarMostrar] = useState(false)
      const [colaboradores, setColaboradores] = useState([{
        
            equipo: "Programación",
            foto: "https://github.com/genesysaluralatam.png",
            nombre:"Genesys Rondón",
            puesto: "Desarrolladora de software e instructora",
          },
          {
        
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre:"Christian Velazco",
            puesto: "Head de Alura e instructor",
          },
          {
    
            equipo: "Front-End",
            foto: "https://github.com/harlandlohora.png",
            nombre:"Harland Lohora",
            puesto: "Instructor",
          },
          {

            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre:"Christian Velazco",
            puesto: "Instructora en Alura Latam",
          },
          {

            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre:"Jose Gonzalez",
            puesto: "Dev. FullStack",
          }])

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

  //Lista de equipos

  const equipo = [

    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
];

  return (
    <div className="App">
      <Header />
      {
        mostrarForm && <Formulario 
        equipo={equipo.map((equipo)=> equipo.titulo)}
            registrarColaborador = {registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
        {
          equipo.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          />)
          
        }

        <Footer/>
      
    </div>

  );
}

export default App;
