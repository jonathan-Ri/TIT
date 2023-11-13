import React from 'react';
import styles from './Donar.module.css'
import { Link } from 'react-router-dom';

const Donar = () => {

  const Id=localStorage.getItem('token');
  return (
    <body>
     <div class="container">
       <div class="row">
        <h1>{ Id.id}</h1>
        <h1>Acerca del proyecto</h1>
       </div>
       <div class="row">
        <div class="col"> <h3>A partir de este momento, usted y su equipo forman parte de una red de universidades que forman parte del proyecto Fondecyt. Todos los juegos en que participará se están ejecutando simultáneamente con equipos de esas universidades para competir con ustedes.</h3></div>

       </div>
       <br></br>
       <div class="col"> <Link className={styles.buton} to="/tutorial-1">Ok, continuemos!</Link></div>
     </div>
    </body>   
  );
}

export default Donar;