import Boton from '../Boton/Boton';
import './Cita.css';

const Cita = ({ mascota, dueño, fecha, hora, sintomas, citas, setCitas, objCita }) => {
    const eliminarCita = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta cita?')) {
            setCitas(prevState => prevState.filter(cita => 
                cita.mascota !== objCita.mascota ||
                cita.dueño !== objCita.dueño ||
                cita.fecha !== objCita.fecha ||
                cita.hora !== objCita.hora ||
                cita.sintomas !== objCita.sintomas));
        }
    };

    return (
        <div className='cita'>
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{dueño}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Síntomas: <span>{sintomas}</span></p>
            <Boton deleteCita = {eliminarCita} className="button elimnar u-full-width" titulo="Eliminar ×" />
        </div>
    );
};

export default Cita;
