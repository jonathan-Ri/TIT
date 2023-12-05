import React, { useState } from 'react';
import styles from './Espera.module.css';
import { useNavigate } from 'react-router-dom';
import imagen from './reloj arena.png';
import RondaService from '../../Services/ronda.service';

const Negociacion = () => {
  const navigate = useNavigate();

  
  const Id_juego=3//localStorage.getItem('equipo');

  function miFuncion() {
    console.log("esta en ciclo")
  }
  

  const intervalo = setInterval(miFuncion, 7000);
  
  let repeticiones = 0;
  const maxRepeticiones = 5;
  
  function detenerIntervalo() {
    clearInterval(intervalo);
    console.log("Intervalo detenido después de 10 repeticiones.");
  }
  
  const temporizador = setInterval(function () {
    repeticiones++;
    if ((repeticiones >= maxRepeticiones)) {
      detenerIntervalo();
      clearInterval(temporizador);
    }
  }, 5000);

  return (
    <div className={styles.body}>
      <div className="row">
          <label className={styles.Titulo}>Espera</label>
          <div className="col">
            <div className="row">
              <h4>Espere a que el encargado del experimento de paso a la siguiente etapa</h4>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Negociacion;
