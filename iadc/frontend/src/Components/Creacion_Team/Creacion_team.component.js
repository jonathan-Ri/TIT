import React from "react";
import styles from "./Creacion_team.module.css"
import { useState} from "react";

const Creacion_team=()=>{
    const [jugador1, setJUgador1] = useState('');
    const [jugador2, setJUgador2] = useState('');
    const [jugador3, setJUgador3] = useState('');
    const [jugador4, setJUgador4] = useState('');
    const [jugador5, setJUgador5] = useState('');
    const [jugador6, setJUgador6] = useState('');

   const crearTeam=(event)=>{
     //creacion de team
     alert('team creado exitosamente')
   };
   const handleMensajeChange2=(e)=>{
     setJUgador1(e.target.value)
   }
   const handleMensajeChange3=(e)=>{
    setJUgador2(e.target.value)
  }
  const handleMensajeChange4=(e)=>{
    setJUgador3(e.target.value)
  }
  const handleMensajeChange5=(e)=>{
    setJUgador4(e.target.value)
  }
  const handleMensajeChange6=(e)=>{
    setJUgador5(e.target.value)
  }
  const handleMensajeChange1=(e)=>{
    setJUgador6(e.target.value)
  }
   return(
    <div className={styles.bodi}>
    <div class="row">
     <form className={styles.formInicio} onSubmit={crearTeam}>
      <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
      <input class={styles.imputInicio} type="text" id="jugador1" name="jugador1" placeholder="Ej: A1B2C3" onChange={handleMensajeChange1}/>
      <br></br>
      <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
      <input class={styles.imputInicio} type="text" id="jugador2" name="jugador2" placeholder="Ej: A1B2C3" onChange={handleMensajeChange2}/>
      <br></br>
      <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
      <input class={styles.imputInicio} type="text" id="jugador3" name="jugador3" placeholder="Ej: A1B2C3" onChange={handleMensajeChange3}/>
      <br></br>
      <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
      <input class={styles.imputInicio} type="text" id="jugador4" name="jugador4" placeholder="Ej: A1B2C3" onChange={handleMensajeChange4}/>
      <br></br>
      <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
      <input class={styles.imputInicio} type="text" id="jugador5" name="jugador5" placeholder="Ej: A1B2C3" onChange={handleMensajeChange5}/>
      <br></br>
      <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
      <input class={styles.imputInicio} type="text" id="jugador6" name="jugador6" placeholder="Ej: A1B2C3" onChange={handleMensajeChange6}/>
      <br></br>
      <button type='submit'>Aceptar</button>
     </form>
    </div>
  </div>
   );
};

export default Creacion_team;