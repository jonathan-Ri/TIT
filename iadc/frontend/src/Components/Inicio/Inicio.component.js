import React from 'react';
import styles from './Inicio.module.css'
import fondo from './fondo.PNG'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
     <div className={styles.bodi}>
       <div class="row">
        <form className={styles.formInicio}>
         <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
         <input class={styles.imputInicio}type="text" id="id" name="id" />
         <br></br>
         <button type='submit'>Aceptar</button>
        </form>
       </div>
     </div>
  );
}

export default Inicio;