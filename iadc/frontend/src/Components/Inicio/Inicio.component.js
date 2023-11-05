import React ,{ useState } from 'react';
import styles from './Inicio.module.css'
import fondo from './fondo.PNG'
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();
  const [redirigir, setRedirigir] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar las acciones relacionadas con el envío del formulario
    
    // Luego, activa la redirección
    navigate('/Donar');
};
  return (
     <div className={styles.bodi}>
       <div class="row">
        <form className={styles.formInicio} onSubmit={handleSubmit}>
         <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
         <input class={styles.imputInicio} type="text" id="id" name="id" onChange={handleMensajeChange}/>
         <br></br>
         <button type='submit'>Aceptar</button>
        </form>
       </div>
     </div>
  );
}

export default Inicio;