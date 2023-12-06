import React, { useState } from 'react';
import styles from './Admin3.module.css'; 
import { useNavigate } from 'react-router-dom';

const Admin3 = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  const [tuToken, setToken] = useState({ id: 'as' });
  const [jugadores, setJugadores] = useState([
    {id_jugador: "asd",fondo:3000, imagen: "req.body.imagen",id_equipo: 1, estado:0},
    {id_jugador: "asdg",fondo:3000, imagen: "req.body.imagen",id_equipo: 1, estado:0},
    {id_jugador: "asdh",fondo:3000, imagen: "req.body.imagen",id_equipo: 1, estado:0},
    {id_jugador: "asdi",fondo:3000, imagen: "req.body.imagen",id_equipo: 1, estado:0},
    {id_jugador: "asdj",fondo:3000, imagen: "req.body.imagen",id_equipo: 1, estado:0},
    {id_jugador: "asdk",fondo:3000, imagen: "req.body.imagen",id_equipo: 1, estado:0}]);
    const [estaConectado, setEstaConectado] = useState([false,false,false,false,false,false]);
    const id_equipo = localStorage.getItem('id_juego')

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div >
      <div className="row">
        <form className={styles.formAdmin2} onSubmit={handleSubmit}>
          <label className={styles.Titulo}>donaciones del {" equipo "+id_equipo}</label>
          <div className="row">
            {/* Columna ID */}
            <div className="col">
              <h3>ID</h3>
              <div className="row"><p>{jugadores[0].id_jugador}</p></div>
              <div className="row"><p>{jugadores[1].id_jugador}</p></div>
              <div className="row"><p>{jugadores[2].id_jugador}</p></div>
              <div className="row"><p>{jugadores[3].id_jugador}</p></div>
              <div className="row"><p>{jugadores[4].id_jugador}</p></div>  
              <div className="row"><p>{jugadores[5].id_jugador}</p></div>
            </div>
            {/* Columna Estado */}
            <div className="col">
              <h3>Estado</h3>
              <div className="row">
              <p className={estaConectado[0] ? styles.conectado : styles.noConectado}>
                 {estaConectado[0] ? 'Conectado' : 'No Conectado'}
              </p>
              </div>
              <div className="row">
              <p className={estaConectado[1] ? styles.conectado : styles.noConectado}>
                  {estaConectado[1] ? 'Conectado' : 'No Conectado'}
              </p>
              </div>
              <div className="row">
              <p className={estaConectado[2] ? styles.conectado : styles.noConectado}>
                  {estaConectado[2] ? 'Conectado' : 'No Conectado'}
              </p>
              </div>
              <div className="row">
              <p className={estaConectado[3] ? styles.conectado : styles.noConectado}>
                  {estaConectado[3] ? 'Conectado' : 'No Conectado'}
              </p>
              </div>
              <div className="row">
              <p className={estaConectado[4] ? styles.conectado : styles.noConectado}>
                  {estaConectado[4] ? 'Conectado' : 'No Conectado'}
              </p>
              </div>
              <div className="row">
              <p className={estaConectado[5] ? styles.conectado : styles.noConectado}>
                  {estaConectado[5] ? 'Conectado' : 'No Conectado'}
              </p>
              </div> 
            </div>
          </div>
            <button type="submit">Comenzar</button>
        </form>
      </div>
    </div>
  );
};

export default Admin3;
