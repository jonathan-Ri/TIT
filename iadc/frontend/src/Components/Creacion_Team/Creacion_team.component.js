import React from "react";
import styles from "./Creacion_team.module.css"
import { useState} from "react";
import TeamServices from "../../Services/team.service"
import jugadorServices from "../../Services/jugador.service"
import {useNavigate} from 'react-router-dom';


const Creacion_team=()=>{
    const id_juego= localStorage.getItem('id_juego')
    const jug={
      id_jugador: "123abcdeadasd",
      fondo: 10000,
      imagen: 1,
      estado: 1,
      id_equipo: 1,
      createdAt: "2023-01-01T12:00:00Z",
      updatedAt: "2023-01-01T14:30:00Z"
    }
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

   const crearTeam=async (event)=>{
    event.preventDefault();
    let team={
      id_equipo: 35,//id_juego,
      nombre_equipo: "z",
      pozo_comun: 0
     }
    
      await TeamServices.create(team).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    try {
      console.log("entra")
      // Array con los datos de los 6 usuarios a crear
      let jugadores=[jugador1,jugador2,jugador3,jugador4,jugador5,jugador6]
      const usuariosAcrear = [
        jug,
        { id_jugador: String(jugadores[0]), fondo:3000, id_equipo: parseInt(id_juego), imagen:1, estado:0, createdAt: "2023-01-01T12:00:00Z", updatedAt: "2023-01-01T14:30:00Z" },
        { id_jugador: String(jugadores[1]), fondo:3000, id_equipo: parseInt(id_juego), imagen:1, estado:0, createdAt: "2023-01-01T12:00:00Z", updatedAt: "2023-01-01T14:30:00Z"},
        { id_jugador: String(jugadores[2]), fondo:3000, id_equipo: parseInt(id_juego), imagen:1, estado:0, createdAt: "2023-01-01T12:00:00Z", updatedAt: "2023-01-01T14:30:00Z"},
        { id_jugador: String(jugadores[3]), fondo:3000, id_equipo: parseInt(id_juego), imagen:1, estado:0, createdAt: "2023-01-01T12:00:00Z", updatedAt: "2023-01-01T14:30:00Z"},
        { id_jugador: String(jugadores[4]), fondo:3000, id_equipo: parseInt(id_juego), imagen:1, estado:0, createdAt: "2023-01-01T12:00:00Z", updatedAt: "2023-01-01T14:30:00Z"},
        { id_jugador: String(jugadores[5]), fondo:3000, id_equipo: parseInt(id_juego), imagen:1, estado:0, createdAt: "2023-01-01T12:00:00Z", updatedAt: "2023-01-01T14:30:00Z"},
      ];
      console.log(usuariosAcrear)
  
      // Iterar sobre el array y llamar a la función create para cada usuario
      for (const usuario of usuariosAcrear) {
        console.log("entra tambien")
        await jugadorServices.create(usuario).then((res)=>{
          console.log(res.data)
        }).catch((err)=>{
          console.log(err)
        });
        console.log(`Usuario creado: ${usuario.nombre}`);
      }
  
      console.log('Todos los usuarios han sido creados exitosamente.');
      navigate('/Admin3')
    } catch (error) {
      console.error('Error al crear usuarios:', error);
    }
  };
    
   const crearJugadores=()=>{
    let jugadores=[jugador1,jugador2,jugador3,jugador4,jugador5,jugador6]
    console.log(jugadores)
    for(let i =0;i<=5;i++){
     jugadorServices.create({id_jugador: String(jugadores[0]), fondo:3000, id_equipo: parseInt(id_juego), imagen:1, estado:0, createdAt: "2023-01-01T12:00:00Z", updatedAt: "2023-01-01T14:30:00Z"}).then((res)=>{
       console.log(res)
     }).catch((err)=>{
       console.log(err)
     })
    }
    
    
   }
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