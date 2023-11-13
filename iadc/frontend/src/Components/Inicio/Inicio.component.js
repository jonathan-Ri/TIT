import React ,{ useState } from 'react';
import styles from './Inicio.module.css'
import {useNavigate} from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  const [tuToken, setToken] = useState({id:'as'});
  var token={}
  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };
  const handleSubmit = (event) => {
    //event.preventDefault();
    setToken({id:'998'})
    token=mensaje
    localStorage.setItem('token', token);
    // Luego, activa la redirección
    navigate('/donar');
};
  return (
     <div className={styles.bodi}>
       <div class="row">
        <form className={styles.formInicio} onSubmit={handleSubmit}>
         <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
         <input class={styles.imputInicio} type="text" id="id" name="id" placeholder="Ej: A1B2C3" onChange={handleMensajeChange}/>
         <br></br>
         <button type='submit'>Aceptar</button>
        </form>
       </div>
     </div>
  );
}

export default Inicio;