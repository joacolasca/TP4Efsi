import './App.css';
import { useState } from 'react';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Formulario from './components/Formulario/Formulario';
import Cita from './components/Cita/Cita';
import Boton from './components/Boton/Boton';
import FormSubmit from './components/FormSubmit/FormSubmit';
function App() {
    const [citas, setCitas] = useState([]);
    return(
        <>
          <Titulo texto="ADMINISTRADOR DE PACIENTES" />
          <div className="container">
         <div className="row">
                <div className="one-half column">
                    <Subtitulo texto = "CREAR MI CITA"/>
                    <FormSubmit citas = { citas } setCitas = {setCitas} />
                </div>
                <div className = "one-half column">
                    <Subtitulo texto = "ADMINISTRA TUS CITAS"/>
                    {citas.map((cita, index) => {
                      return <div> <Cita mascota= {cita.nombreMascota} dueño={cita.nombreDueño} fecha={cita.fecha} hora={cita.hora} sintomas= {cita.sintomas} citas ={citas} setCitas = {setCitas} objCita = {cita}/></div>
                    })}
                </div>
                </div>
                </div>
        </>
    );
}

export default App;
