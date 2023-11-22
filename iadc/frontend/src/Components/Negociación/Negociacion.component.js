import React, { useState } from 'react';
import styles from './Inicio.module.css';
import { useNavigate } from 'react-router-dom';
import imagen from './reloj arena.png';

const Negociacion = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  const [tuToken, setToken] = useState({ id: 'as' });

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div className={styles.body}>
      <div className="row">
        <form className={styles.formNegociacion} onSubmit={handleSubmit}>
          <label className={styles.Titulo}>Negociación</label>
          <div className="row">
            <div className="col">
              <h1>En esta fase será guiado de forma presencial para discutir lo siguiente:</h1>
            </div>
            <div className="col">
              <h2>Avance a la siguiente ronda.</h2>
            </div>
            <div className="col">
              <h3>Asignación de rol de defensa o ataque.</h3>
            </div>
            <div className="col">
              <h4>Continuidad en el juego.</h4>
            </div>
            <div className="col">
              <img src={imagen} className={styles.imagen} alt="reloj arena" />
            </div>
          </div>
          <button type="submit">Aceptar</button>
        </form>
      </div>
    </div>
  );
};

export default Negociacion;
