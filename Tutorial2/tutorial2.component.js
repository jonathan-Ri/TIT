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
     <div class="container">
     <br></br>
       <div class="row">
        <div class="col">
           <Link className={styles.arrow}to='/tutorial-1'>←</Link>
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
              <h5>Si el pozo del equipo atacante supera al de los defensores, entonces se quedan con el remanente que se quedaron los defensores de la donación que hicieron a su pozo común de defensa.</h5>
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
            <h4>Rol de defensa</h4>
            
          <div class="row">
            <div class="col">
              <h5>Si su pozo supera al otro equipo, conservarán el remanente de la donación que el otro equipo hizo a su pozo común.</h5>
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
            <h4>Castigo</h4>
            
          <div class="row">
            <div class="col">
              <h5>Luego de terminada la ronda, cada jugador tendrá la opción de castigar a los miembros de su equipo, destruyendo parte de su dinero.</h5>
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
            <h4>Apoyo</h4>
            
          <div class="row">
            <div class="col">
              <h5>Podrá donar a su equipo para que se reparta en partes iguales, o una cantidad específica a un compañero. Todas estas acciones serán visualizadas por el resto del equipo.</h5>
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
       <br></br>
       <div class="col"> <Link className={styles.buton}to="/inicio">Ok, empecemos!</Link> </div>
     </div>
    </body>
     
  );
}

export default Tutorial1;