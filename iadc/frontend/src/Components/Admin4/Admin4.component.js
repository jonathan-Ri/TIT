import React, { useState } from 'react';
import styles from './Admin4.module.css'; 
import { useNavigate } from 'react-router-dom';

const Admin4 = () => {
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
    <div >

        <form className={styles.formAdmin3} onSubmit={handleSubmit}>
          <label className={styles.Titulo}>Ronda 1 - Estatus</label>
          <h2>Donaciones del equipo</h2>
          <div className="row" style={{ marginLeft:'1vh' }}>
            {/* Primera columna */}
            <div className="col">
              <h3>Jugador</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh', width:'50%' }}>
                  <input type="text" value={index + 1} readOnly className={styles.imputAdmin3} />
                </div>
              ))}
            </div>
            {/* Segunda columna */}
            <div className="col">
              <h3>Fondo</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh', width:'50%'  }}>

                  <input type="number" value={0} readOnly className={styles.imputAdmin3} />
                </div>
              ))}
            </div>
            {/* Tercera columna */}
            <div className="col">
              <h3>Donación</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh', width:'50%'  }}>

                  <input type="number" value={0} readOnly className={styles.imputAdmin3} />
                </div>
              ))}
            </div>
            {/* Cuarta columna */}
            <div className="col">
              <h3>Estado</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '3.7vh' , width:'50%' }}>
                  { <input type="checkbox" value="true" /> }
                </div>
              ))}
            </div>
          </div>
            <button type="submit">Siguiente fase</button>
        </form>
    </div>
  );
};

export default Admin4;
