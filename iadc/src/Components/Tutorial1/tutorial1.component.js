import React from 'react';
import styles from './tutorial1.module.css'
import img1 from './img.png'
import img2 from './img2.PNG'
import img3 from './img3.PNG'
import img4 from './img4.PNG'
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
          {/* aqui empieza un cuadriculo*/}
          <div class="row">
            <h4> El dinero</h4>
            
          <div class="row">
            <div class="col">
              <h5>Comienzas con $3.000.
A través de donaciones del grupo, se colectan donaciones para el pozo cómun, la victoria depende de si se supera el monto acumulado en el pozo comun del equipo contrario</h5>
            </div>
            <div class="col">
               <img src={img1} alt="imagen 2"/>
            </div>
          </div>
          <div class="row">
            <div className={styles.segmented_line}></div>
          </div>
          </div>
          {/* aqui termina un cuadriculo*/}
        </div>
        <div class="col"> 
        <div class="row">
            <h4>Momento de donar</h4>
            
          <div class="row">
            <div class="col">
              <h5>En la casilla habilitada debes ingresar el monto que quieres donar, presionar “Ok” y esperar.Hay que tener en cuenta que las siguientes rondas se juegan con el remanate de la ronda anterior.
                                                _</h5>
            </div>
            <div class="col">
               <img src={img3} alt="imagen 2"/>
            </div>
          </div>
          <div class="row">
            <div className={styles.segmented_line}></div>
          </div>
          </div>
          {/* aqui termina un cuadriculo*/}
        </div>

       </div>
       <div class="row">
       <div class="col"> 
        <div class="row">
            <h4>Roles de equipo</h4>
            
          <div class="row">
            <div class="col">
              <h5>Al comienzo de cada ronda se le dara un rol a tu equipo, dependiendo del rol se tendran distintas consecuencias al perder o ganar la ronda</h5>
            </div>
            <div class="col">
               <img src={img2} alt="imagen 2"/>
            </div>
          </div>
          <div class="row">
            <div className={styles.segmented_line}></div>
          </div>
          </div>
          {/* aqui termina un cuadriculo*/}
        </div>

        <div class="col"> 
        <div class="row">
            <h4>Fase de estatus</h4>
            
          <div class="row">
            <div class="col">
              <h5> Después de cada ronda de ataque o defensa vendrá esta fase, en ella los miembros del equipo podrán ver en la pantalla del computador cuánto donó cada miembro del equipo, con cuanto se quedó y el resultado de la interacción.</h5>
            </div>
            <div class="col">
               <img src={img4} alt="imagen 2"/>
            </div>
          </div>
          <div class="row">
            <div className={styles.segmented_line}></div>
          </div>
          </div>
          {/* aqui termina un cuadriculo*/}
        </div>






       </div>
       <div class="col"> <button>Ok, continuemos!</button> </div>
       <div class="col"> <Link className={styles.button} to="/tutorial-2">Ok, continuemos!</Link></div>
     </div>
    </body>
     
  );
}

export default Tutorial1;