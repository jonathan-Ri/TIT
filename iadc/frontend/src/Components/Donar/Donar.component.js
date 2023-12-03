import React ,{ useState }from 'react';
import styles from './Donar.module.css'
import { Link } from 'react-router-dom';
import Billetera from './billetera.PNG'

const Donar = () => {
  const [donacion, setDonacion] = useState(0);
  const Id=localStorage.getItem('token');
  var Ronda=1
  var Rol = 'Ataque'
  var Presupuesto=0

  const handleDonacionChange = (e) => {
    setDonacion(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   //Set donacion a base de datos + id
   if(donacion<=Presupuesto && donacion>=0){
    alert("has donado $"+donacion.toString())
   }
   else{
    alert("donación mayor a presupuesto o menor a 0 !!!\n Intente nuevamente")
   }
    
  };
  const getRol=()=>{
    //coneccion con base de datos

    //editar rol
  }
  const getRonda=()=>{
    
  }

  const getPresupuesto=()=>{
    //coneccion con base de datos
    Presupuesto=3000
    //editar numero de ronda
  }
  getPresupuesto()

  return (
    <div className={styles.bodi}>
        <div class="row">
        <lavel className={styles.Titulo}>Ronda N° {Ronda}</lavel>
        <div className={styles.Rol}> Rol de {Rol}</div>
        <div class="row">
            <div class="col">
              <img className={styles.icono} src={Billetera}/>
            </div>
            <div class="col">
                <div className={styles.presupuesto}>{Presupuesto}</div>
            </div>
        </div>
        </div>
       <div class="row">
        <form className={styles.formInicio} onSubmit={handleSubmit}>
         <lavel className={styles.Titulo}>¿Cuánto dinero desea donar?</lavel>
         <input class={styles.imputInicio} type="Number" id="donacion" name="donacion" placeholder="" onChange={handleDonacionChange}/>
         <br></br>
         <button type='submit'>Aceptar</button>
        </form>
       </div>
     </div>  
  );
}

export default Donar;