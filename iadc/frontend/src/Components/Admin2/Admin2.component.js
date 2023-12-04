import React, { useState } from 'react';
import styles from './Admin2.module.css';
import { useNavigate } from 'react-router-dom';

const Admin2 = () => {
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
        <form className={styles.formAdmin2} onSubmit={handleSubmit}>
          <label className={styles.Titulo}>Ronda 1 - Conexión</label>
          <div className="row">
            {/* Columna ID */}
            <div className="col">
              <h3>ID</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh' }}>
                  <input type="text" value={index + 1} readOnly className={styles.imputAdmin2} />
                </div>
              ))}
            </div>
            {/* Columna Estado */}
            <div className="col">
              <h3>Estado</h3>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="row" style={{ marginBottom: '1vh' }}>
                  {/* <input type="checkbox" checked={/* Aquí iría la lógica para marcar automáticamente de si está conectado o no *//*} /> */}
                </div>
              ))}
            </div>
          </div>
            <button type="submit">Comenzar</button>
        </form>
      </div>
    </div>
  );
};

export default Admin2;
