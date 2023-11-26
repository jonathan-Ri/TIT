import React, { useState } from 'react';
import styles from './Primerjuego.module.css';
import { Link } from 'react-router-dom';


const PrimerJuego = () => {
  return (
    <div className="container">
      <h1 className="Titulo">Resumen del Primer Juego</h1>
      <div className="row">
        {/* Primera columna */}
        <div className="col-md-3">
          <h3>ID jugador</h3>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>{`$`}</label>
              <input type="number" value={0} readOnly className="inputNegociacion" />
            </div>
          ))}
        </div>
        {/* Segunda columna */}
        <div className="col-md-3">
          <h3>Donación</h3>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>{`${index + 1}. $`}</label>
              <input type="number" value={0} readOnly className="inputNegociacion" />
            </div>
          ))}
        </div>
        {/* Tercera columna */}
        <div className="col-md-3">
          <h3>Con Cuánto Quedó</h3>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>{`$`}</label>
              <input type="number" value={0} readOnly className="inputNegociacion" />
            </div>
          ))}
        </div>
        {/* Cuarta columna */}
        <div className="col-md-3">
          <h3>Resultado</h3>
          <div style={{ fontSize: '30px', textAlign: 'center', marginTop: '20px' }}>
            ¡VICTORIA!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimerJuego;
