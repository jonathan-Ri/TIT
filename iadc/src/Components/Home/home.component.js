import React from 'react';
import styles from './home.module.css'
import imagen from './imagen explicativa 1.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <body>
     <div class="container">
       <div class="row">
        <h1>Acerca del proyecto</h1>
       </div>
       <div class="row">
        <div class="col"> <h3>A partir de este momento, usted y su equipo forman parte de una red de universidades que forman parte del proyecto Fondecyt. Todos los juegos en que participará se están ejecutando simultáneamente con equipos de esas universidades para competir con ustedes.</h3></div>
        <div class="col"> <img src={styles.imagen} alt="imagen explicativa 1" /></div>
       </div>
       <div class="col"> <Link className={styles.button} to="/tutorial-1">Ok, continuemos!</Link></div>
     </div>
    </body>
     
  );
}

export default Home;