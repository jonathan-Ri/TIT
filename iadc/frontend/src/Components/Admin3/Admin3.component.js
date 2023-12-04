import React, { useState } from 'react';
import styles from './Admin3.module.css'; 
import { useNavigate } from 'react-router-dom';

const Admin3 = () => {
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
    <div className={styles.container}>
        <form className={styles.formAdmin3} onSubmit={handleSubmit}>
          <label className={styles.Titulo}>Ronda 1 - Donación</label>
          <label>Donaciones del equipo</label>
          <div className="row">
            {/* Primera columna */}
            <div className="col">
              <h3>Jugador</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh' }}>
                  <input type="text" value={index + 1} readOnly className={styles.imputAdmin3} />
                </div>
              ))}
            </div>
            {/* Segunda columna */}
            <div className="col">
              <h3>Fondo</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh' }}>
                  <input type="number"  value={0} readOnly className={styles.imputAdmin3} />
                </div>
              ))}
            </div>
            {/* Tercera columna */}
            <div className="col">
              <h3>Donación</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh' }}>
                  <input type="number" value={0} readOnly className={styles.imputAdmin3} />
                </div>
              ))}
            </div>
            {/* Cuarta columna */}
            <div className="col">
              <h3>Estado</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh' }}>
                  {/* <input type="checkbox" checked={/* Aquí iría la lógica para marcar automáticamente si está conectado o no *//*} /> */}
                </div>
              ))}
            </div>
          </div>
            <button type="submit">Siguiente fase</button>
        </form>
    </div>
  );
};

export default Admin3;
