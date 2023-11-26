import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './prestigio.module.css';

const Prestigio = () => {
  const [valores, setValores] = useState([0, 0, 0, 0, 0]);
  const [resultado, setResultado] = useState(0);
  const [donacion, setDonacion] = useState(0);

  const handleDonacionChange = (e) => {
    const newValue = e.target.value;
    setDonacion(newValue);
  };

  const donarEquipo = () => {
    setResultado(resultado + parseInt(donacion));
  };

  const handleInputChange = (e, index) => {
    const newValue = e.target.value;
    const newValues = [...valores];
    newValues[index] = newValue;
    setValores(newValues);
  };

  const calcularResultado = () => {
    const suma = valores.reduce((acc, currentValue) => acc + parseInt(currentValue), 0);
    setResultado(suma);
  };

  return (
    <div className="body">
      <h1>Ronda 1 - Apoyo</h1>
      <div className="row">
        <h3>Tu saldo actual</h3>
        <input type="text" value={resultado} readOnly />
        <button onClick={calcularResultado}>Calcular</button>
      </div>
      <div className="row" style={{ borderBottom: '1px dashed #000' }}>
        <div className="col-md-4" style={{ borderRight: '1px dashed #000' }}>
          <h3>¿Deseas donar al equipo?</h3>
          <div style={{ marginBottom: '10px' }}>
            <label>{`$`}</label>
            <input
              type="number"
              value={donacion}
              onChange={(e) => handleDonacionChange(e)}
            />
          </div>
          <button onClick={donarEquipo}>Donar</button>
        </div>
        <div className="col-md-4" style={{ borderRight: '1px dashed #000' }}>
          {valores.map((value, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>{`$`}</label>
              <input
                type="number"
                value={value}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          ))}
          <button>Confirmar</button>
        </div>
        <div className="col-md-4">
          <h3>¿Deseas castigar a un jugador?</h3>
          <p></p>
          <h6>*Realizar un castigo significa destruir parte del saldo de un jugador.</h6>
          <button>Confirmar</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Link to="/siguiente-pagina">
          <button>Continuar</button>
        </Link>
      </div>
    </div>
  );
};

export default Prestigio;