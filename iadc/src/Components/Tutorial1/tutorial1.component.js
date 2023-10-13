import React from 'react';
import styles from './tutorial1.css'



const Tutorial1 = () => {
  return (
    <body>
     <div class="container">
       <div class="row">
        <div class="col">

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
        <div class="col"> <h3>A partir de este momento, usted y su equipo forman parte de una red de universidades que forman parte del proyecto Fondecyt. Todos los juegos en que participará se están ejecutando simultáneamente con equipos de esas universidades para competir con ustedes.</h3> </div>
        <div class="col"> <img src="./asd" alt="imagen explicativa 1" /> </div>
       </div>
       <div class="col"> <button>Ok, continuemos!</button> </div>
     </div>
    </body>
     
  );
}

export default Tutorial1;