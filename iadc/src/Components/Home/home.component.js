import React from 'react';
import styles from './home.css'
import imagen from './imagen explicativa 1.png'


const Home = () => {
  return (
    <body>
     <div class="container">
       <div class="row">
        <h1>Acerca del proyecto</h1>
       </div>
       <div class="row">
        <div class="col"> <h3>A partir de este momento, usted y su equipo forman parte de una red de universidades que forman parte del proyecto Fondecyt. Todos los juegos en que participará se están ejecutando simultáneamente con equipos de esas universidades para competir con ustedes.</h3></div>
        <div class="col"> <img src={imagen} alt="imagen explicativa 1" /></div>
       </div>
       <div class="col"> <button>Ok, continuemos!</button></div>
     </div>
    </body>
     
  );
}

export default Home;