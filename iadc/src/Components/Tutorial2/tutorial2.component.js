import React from 'react';
import styles from './tutorial2.module.css'
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
           <Link to='/tutorial-1'>←</Link>
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
            <h4> Rol de ataque</h4>
            
          <div class="row">
            <div class="col">
              <h5>Si el pozo del equipo atacante supera al de los defensores, entonces se quedan con el remanente que se quedaron los defensores de la donación que hicieron a su pozo común de  defensa.</h5>
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
            <h4>Roles</h4>
            
          <div class="row">
            <div class="col">
              <h5></h5>
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
            <h4>Rol de Ataque</h4>
            
          <div class="row">
            <div class="col">
              <h5>Si el pozo del equipo atacante supera al de los defensores, entonces se quedan con el remanente que se quedaron los defensores de la donación que hicieron a su pozo común de  defensa. Las ganancias serán divididas equitativamente entre los miembros del grupo.</h5>
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
            <h4>Roles</h4>
            
          <div class="row">
            <div class="col">
              <h5>Al comienzo de la ronda se le asignara un rol a tu equipo(ataque o defensa), dependiendo del rol asignado se tendran distintas conseguencias al ganar o perder</h5>
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
       <div class="col"> <button>Ok, empecemos!</button> </div>
     </div>
    </body>
     
  );
}

export default Tutorial1;