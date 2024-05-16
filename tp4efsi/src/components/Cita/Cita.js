import Boton from '../Boton/Boton';
import './Cita.css';
const Cita=({mascota, dueño, fecha, hora, sintomas, citas, setCitas, objCita})=>{
    const eliminarCita = (e)=>{
        e.preventDefault();
        setCitas(prevState => prevState.filter(cita => cita.nombreMascota !== objCita.nombreMascota))
    }
    return(
        <>
            <div className='cita'>
                <p>Mascota: <span>{mascota}</span></p>
                <p>Dueño: <span>{dueño}</span></p>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Hora: <span>{hora}</span></p>
                <p>Sintomas: <span>{sintomas}</span></p>
                <Boton deleteCita = {eliminarCita} className="button elimnar u-full-width" titulo = "Eliminar ×"/>
            </div>
        </>
    )
}
export default Cita;