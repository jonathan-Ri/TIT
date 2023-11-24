import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Resultadoprestigio.module.css';

const Resultadoprestigio = () => {
  // Matriz con las frases específicas
  const frases = [
    ['Objetivo', 'Donación', 'Castigo', 'Jugador 1', '$100', '$100'],
    ['Jugador 2', '$0', '$290', 'Jugador 3', '$0', '$200'],
    ['Jugador 4', '$300', '$0', 'Jugador 5', '$200', '$0']
  ];

  return (
    <div className={styles.body}>
      <div className="container">
        <div className="row">
          <h1>Ronda 1 - Apoyo</h1>
        </div>
        <div className="row">
          <div className="col">
            <h3>Selección de jugador.</h3>
            {/* Integración de la tabla aquí */}
            <table border="1">
              {frases.map((fila, indexFila) => (
                <tr key={indexFila}>
                  {fila.map((celda, indexCelda) => (
                    <td key={indexCelda}>{celda}</td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        </div>
        <br />
        <div className="col">
          <Link className={styles.button} to="/tutorial-1">
            Ok, ¡Finalizar!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resultadoprestigio;
