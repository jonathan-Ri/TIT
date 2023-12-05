import React ,{ useState,Component }from 'react';
import styles from './Donar.module.css'
import { Link } from 'react-router-dom';
import Billetera from './billetera.PNG'
import jugadorService from "../../Services/jugador.service"
import donacionService from "../../Services/donacion.service"
import randaService from "../../Services/ronda.service"


class Donar extends Component {
  constructor(props) {
    super(props);
   
    // Inicializa el estado en el constructor
    this.state = {
      donacion: 0,
      Presupuesto:0,
      Ronda:0,
      Id:"hola",//localStorage.getItem('token');
      Rol:"Ataque",
      trigger:false,
      don:{}
    };
  }
  
  componentDidMount() {
    // La lógica que quieres ejecutar solo una vez al montar el componente
    console.log("Componente montado, ejecutando la función una vez");
    
    // Puedes llamar a tu función aquí
  }
  
  handleDonacionChange = (e) => {
    this.donacion=e.target.value;
  };

  handleSubmit = (event) => {

    event.preventDefault();
    let a = localStorage.getItem('equipo')
    if (a != undefined && this.trigger==false){
    
   //Set donacion a base de datos + id
   if(this.donacion<=this.Presupuesto && this.donacion>=0){
    let don={
      donacion: this.donacion,
      id_jugador: this.Id,
      id_ronda: 1//res.body.id_ronda
    }
    console.log()
    donacionService.create()

    alert("has donado $"+this.donacion.toString())
   }
   else{
    alert("donación mayor a presupuesto o menor a 0 !!!\n Intente nuevamente")
   }
  }
  else{
    alert("error al identificar el usuario, ingrese nuevamente")
  }
  };
  getRol=()=>{
    //coneccion con base de datos

    //editar rol
  }
  getRonda=()=>{
    
  }

  getPresupuesto=()=>{
    console.log(this.Id)
    jugadorService.get((this.Id)).then((res)=>{
      let jugador= res.data
      console.log(jugador.fondo)
      this.presupuesto=jugador.fondo;
    }).catch((err)=>{
      console.log(err)
    })
  }

  render(){
  return (
    <div className={styles.bodi}>
        <div class="row">
        <lavel className={styles.Titulo}>Ronda N° {this.Ronda}</lavel>
        <div className={styles.Rol}> Rol de {this.Rol}</div>
        <div class="row">
            <div class="col">
              <img className={styles.icono} src={Billetera}/>
            </div>
            <div class="col">
                <div className={styles.presupuesto}>{this.Presupuesto}</div>
            </div>
        </div>
        </div>
       <div class="row">
        <form className={styles.formInicio} onSubmit={this.handleSubmit}>
         <lavel className={styles.Titulo}>¿Cuánto dinero desea donar?</lavel>
         <input class={styles.imputInicio} type="Number" id="donacion" name="donacion" placeholder="" onChange={this.handleDonacionChange}/>
         <br></br>
         <button type='submit'>Aceptar</button>
        </form>
       </div>
     </div>  
  );}
}

export default Donar;