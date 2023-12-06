import React from "react";
import styles from "./Creacion_team.module.css"
import { useState} from "react";
import TeamServices from "../../Services/team.service"
import jugadorServices from "../../Services/jugador.service"
import {useNavigate} from 'react-router-dom';


const Creacion_team=()=>{
    const id_juego= localStorage.getItem('id_juego')
    const navigate = useNavigate();
    const [jugador1, setJUgador1] = useState('');
    const [jugador2, setJUgador2] = useState('');
    const [jugador3, setJUgador3] = useState('');
    const [jugador4, setJUgador4] = useState('');
    const [jugador5, setJUgador5] = useState('');
    const [jugador6, setJUgador6] = useState('');
    const [Team, setTeam] = useState({});
    const [rol, setRol] = useState('Ataque');
    const fondo = 3000;//define el dinero inicial de los participantes

   const crearTeam=(event)=>{
    let team={
      id_equipo: 1,
      nombre_equipo: "1234",
      pozo_comun: 0
     }
     TeamServices.create(team).then((res)=>{
      console.log(res.data)
      setTeam(res.data)
      console.log("se creo el team exitosamente")
     }).catch((err)=>{
      console.log(err)
     })

     event.preventDefault();
     let jugadores=[jugador1,jugador2,jugador3,jugador4,jugador5,jugador6]
     console.log(jugadores)
     for(let i in 6){

      jugadorServices.create({id_jugador: jugadores[i], fondo:3000, id_equipo: Team.id_equipo, estado: 0}).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
     }
     
     alert('team creado exitosamente')
     navigate('/Admin2')
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
  const handleRolChange=(e)=>{
    setRol(e.target.value)
    console.log(rol)
  }
   return(
    
    <div class="row">
     <form className={styles.formInicio} onSubmit={crearTeam}>
      <label> Id del juego  {id_juego} </label>
      <lavel className={styles.Titulo}>Rol del equipo 
      <select value={rol} onChange={handleRolChange}>
            <option value= "Defensa">Ataque</option>
            <option value="Ataque">Defensa</option>
      </select>
      </lavel>
      <br></br>
      <lavel className={styles.Titulo2}>ID del jugador 1  -
      <input class={styles.imputInicio2} type="text" id="jugador1" name="jugador1" placeholder="Ej: A1B2C3" onChange={handleMensajeChange1}/>
      </lavel>
      <br></br>
      <lavel className={styles.Titulo2}>ID del jugador 2   -
      <input class={styles.imputInicio2} type="text" id="jugador2" name="jugador2" placeholder="Ej: A1B2C3" onChange={handleMensajeChange2}/>
      </lavel>
      <br></br>
      <lavel className={styles.Titulo2}>ID del jugador 3   -
      <input class={styles.imputInicio2} type="text" id="jugador3" name="jugador3" placeholder="Ej: A1B2C3" onChange={handleMensajeChange3}/>
      </lavel>
      <br></br>
      <lavel className={styles.Titulo2}>ID del jugador 4  - 
      <input class={styles.imputInicio2} type="text" id="jugador4" name="jugador4" placeholder="Ej: A1B2C3" onChange={handleMensajeChange4}/>
      </lavel>
      <br></br>
      <lavel className={styles.Titulo2}>ID del jugador 5  -   
      <input class={styles.imputInicio2} type="text" id="jugador5" name="jugador5" placeholder="Ej: A1B2C3" onChange={handleMensajeChange5}/>
      </lavel>
      <br></br>
      <lavel className={styles.Titulo2}>ID del jugador 6   -
      <input class={styles.imputInicio2} type="text" id="jugador6" name="jugador6" placeholder="Ej: A1B2C3" onChange={handleMensajeChange6}/>
      </lavel>
      <br></br>
      <button type='submit'>Aceptar</button>
     </form>
    </div>
   );
};

export default Creacion_team;