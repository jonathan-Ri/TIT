import React from 'react';
import styles from './tutorial1.module.css'
import img1 from './img.png'
import img2 from './img2.PNG'
import img3 from './img3.PNG'
import img4 from './img4.PNG'
import { Link } from 'react-router-dom';

const Tutorial1 = () => {
  return (
     <div class={styles.container}>
      <br></br>
       <div class="row">
        <div class="col">
           <Link className={styles.arrow}to='/'>←</Link>
        </div>
        <div class={styles.bodi}>
          <h1>GUÍA DE JUEGO</h1>
        </div>
        <div class="col">
            <div className={styles.ovalo}>
              Fondo Nacional de Desarrollo Científico y Tecnológico. Proyecto Fondecyt
            </div>
        </div>


        

       </div>
       <div class="row">
        <div class="col"> 
          {/* aqui empieza un cuadriculo*/}
         
          {/* aqui termina un cuadriculo*/}
        </div>
        <div class="col"> 
     
          {/* aqui termina un cuadriculo*/}
        </div>

       </div>
       <div class="row">
       <div class="col"> 
      
          {/* aqui termina un cuadriculo*/}
       
          {/* aqui termina un cuadriculo*/}
        </div>






       </div>
       <div class="col"> <Link className={styles.buton} to="/tutorial-2">Ok, continuemos!</Link></div>
     </div>
     
  );
}

export default Tutorial1;