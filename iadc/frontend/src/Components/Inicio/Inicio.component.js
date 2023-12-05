import React ,{ useState } from 'react';
import styles from './Inicio.module.css'
import {useNavigate} from 'react-router-dom';
import jugadorService from "../../Services/jugador.service"
import teamService from "../../Services/team.service"

const Inicio = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  //const [tuToken, setToken] = useState({id:'as'});
  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };
  const handleSubmit = (event) => { 
    event.preventDefault();
    jugadorService.getAll().then((res)=>{
      let datos= res.data 
      for (let jug in datos){
        console.log(datos[jug])
        if (datos[jug].id_jugador == parseInt(mensaje)){
          localStorage.setItem('id', mensaje);
          localStorage.setItem('equipo', String(datos[jug].id_equipo));
          alert("se logro ingresar exitosamente") 
          
        }
      }
    }).catch((err)=>{
      alert("ñ")
      console.log(err)
    })
    // Luego, activa la redirección
    navigate('/donar');
};
  return (
     <div className={styles.bodi}>
       <div class="row">
        <form className={styles.formInicio} onSubmit={handleSubmit}>
         <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
         <input className={styles.imputInicio} type="text" id="id" name="id" placeholder="Ej: A1B2C3" onChange={handleMensajeChange}/>
         <br></br>
         <button type='submit'>Aceptar</button>
        </form>
       </div>
     </div>
  );
}

export default Inicio;