import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Admin5.module.css';

const Admin5 = () => {
  const frases = [  
    ['Objetivo', 'Donación', 'Castigo', 'Jugador 1', '$100', '$100'],
    ['Jugador 2', '$0', '$290', 'Jugador 3', '$0', '$200'],
    ['Jugador 4', '$300', '$0', 'Jugador 5', '$200', '$0']
  ];

  return (
<div className={styles.body}>
  <div className="container">
    <h1>Ronda 1 - Obtención de estatus</h1>

    <div className="row">
      <div className="col">
        <h3>Selección de jugador.</h3>
        <table className={styles.table}>
          <tbody>
            {frases.map((fila, indexFila) => (
              <tr key={indexFila}>
                {fila.map((celda, indexCelda) => (
                  <td key={indexCelda}>{celda}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className={styles.buttonsContainer}>
          <Link className={styles.button} to="/pagina-anterior">Atrás</Link>
          <Link className={styles.button} to="/tutorial-1">Continuar</Link>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Admin5;
