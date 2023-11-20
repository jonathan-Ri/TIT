import React from 'react';
import styles from './fondo.module.css'
import Juego from '../../Services/juego.service'

const Fondo = () => {
    const fecha= new Date(); 
    const handleSubmit = (event) => {
        const juego ={"fecha": fecha}
        
        Juego.create(juego).then((res)=>{
            if (res.status === 200){
                alert('juego creado con exito');
            }else{
                alert(res);
            }
        }).catch((err)=>{
            alert(err);
        })     
  };
  return (
     <div className={styles.bodi}>
         <form className={styles.formInicio} onSubmit={handleSubmit}>
         <lavel className={styles.Titulo}>Ingrese su ID asignado</lavel>
         <br></br>
         <button type='submit'>Crear nuevo juego</button>
        </form>
     </div>
  );
}

export default Fondo;