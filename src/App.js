import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario.js';
import Header from './components/header/Header.js';
import MiOrg from './components/MiOrg/MiOrg.js';

function App() {
  const [mostrarForm,actualizarMostrar] = useState(true)

  //ternario --> ? seMuestra : no se muestrA

  const cambiarMostrar = ( ) => {
    actualizarMostrar(!mostrarForm);
  }

  return (
    <div className="App">
      <Header />
      {mostrarForm && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
