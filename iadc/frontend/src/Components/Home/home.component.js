import React from 'react';
import styles from './home.module.css'
import imagen from './imagen explicativa 1.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <body>
     <div class={styles.container}>
       <div class={styles.bodi}>
        <h1>Acerca del proyecto</h1>
       </div>
       <div class="row">
       </div>
       <br></br>
       <div class="col"> <Link className={styles.buton} to="/tutorial-1">Ok, continuemos!</Link></div>
     </div>
    </body>   
  );
}

export default Home;