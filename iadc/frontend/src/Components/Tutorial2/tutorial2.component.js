import React from 'react';
import styles from './tutorial2.module.css'
import img1 from './Capturaimg6.PNG'
import img2 from './img5.PNG'
import img3 from './img7.PNG'
import img4 from './img8.PNG'
import { Link } from 'react-router-dom';

const Tutorial1 = () => {
  return (
    <body>
     <div class={styles.container}>
     <br></br>
       <div class="row">
        <div class="col">
           <Link className={styles.arrow}to='/tutorial-1'>←</Link>
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
   
     
       <br></br>
       <div class="col"> <Link className={styles.buton}to="/inicio">Ok, empecemos!</Link> </div>
     </div>
    </body>
     
  );
}

export default Tutorial1;