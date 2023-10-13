import React from 'react';
import styles from './tutorial1.module.css'
import img1 from './img.png'
import { Link } from 'react-router-dom';

const Tutorial1 = () => {
  return (
    <body>
     <div class="container">
       <div class="row">
        <div class="col">
           <Link to='/'>←</Link>
        </div>
        <div class="col">
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
          <div class="row">
            <h4> el dinero</h4>
            
          <div class="row">
            <div class="col">
              <h5>Comienzas con $3.000.
A través de donaciones del grupo, se colectan donaciones para el pozo cómun.</h5>
            </div>
            <div class="col">
               <img src={img1} alt="imagen 2"/>
            </div>
          </div>
          <div class="row">
            <div className={styles.segmented_line}></div>
          </div>
          </div>

        </div>
        <div class="col"> 
        
        </div>
       </div>
       <div class="col"> <button>Ok, continuemos!</button> </div>
     </div>
    </body>
     
  );
}

export default Tutorial1;