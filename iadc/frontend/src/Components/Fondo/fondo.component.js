import React from 'react';
import {Table} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import styles from './fondo.module.css'
import Juego from '../../Services/juego.service'
import ExperimentoRow from '../ExperimentoRow/Experimento.component';

const Fondo = () => {
    const navigate = useNavigate();
    const fecha= new Date(); 
    const lista = [{"id_juego": 1,
    "fecha": "2023-11-05"},{"id_juego": 2,
    "fecha": "2023-11-10"},{"id_juego": 3,
    "fecha": "2023-11-15"}]
    const handleSubmit = () => {
        const juego ={"fecha": fecha}
        
        Juego.create(juego).then((res)=>{
            if (res.status === 200){
                alert('juego creado con exito');
                //navigate('/team');
            }else{
                alert(res);
                //navigate('/team');
            }
        }).catch((err)=>{
            alert(err);
        })     
  };

  const DataTable =()=>{
    return lista.map((res)=>{
        return <ExperimentoRow  obj={res}/>
    })
  }
  return (
     <div className={styles.bodi}>
         <div className={styles.header}> Home</div>
         <form className={styles.formInicio2} onSubmit={handleSubmit}>
         <br></br>
         <button className={styles.button_verde}type='submit'>Crear nuevo juego</button>
        </form>
        <br></br>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Fecha</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
        </Table>
     </div>
  );
}

export default Fondo;