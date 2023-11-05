import React from 'react';
import styles from './Inicio.module.css'
import borde1 from './borde1.PNG'
import borde2 from './borde2.PNG'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
     <div className='pantalla'>
        <div class="row">
       <div className="col1">
         <img src={borde1}/>
       </div>
       <div class="col">
        <h5>cosas</h5>
       </div>
       <div class="col2">
         <img className={styles.imagen} src={borde2}/>
       </div>
       </div>
     </div>
  );
}

export default Inicio;