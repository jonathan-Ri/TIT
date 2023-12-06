import React ,{ useState }from 'react';
import {Table} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import styles from './fondo.module.css'
import Juego from '../../Services/juego.service'
import ExperimentoRow from '../ExperimentoRow/Experimento.component';

const Fondo = () => {
    const navigate = useNavigate();
    const Fecha= new Date(); 
    const [lista, setLista] = useState([]);
    const [tuToken, setToken] = useState({id:''});

    const GetLista =()=>{
        Juego.getAll().then((res)=>{
           const salida= res.data
           setLista(salida)
        }).catch((err)=>{
            alert(err)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const juego ={fecha: Fecha}
        
        Juego.create(juego).then((res)=>{          
            let juego=res.data
            console.log(res)
            localStorage.setItem('id_juego',juego.id_juego)
            alert('juego creado con exito id'+juego.id_juego);
            navigate('/Creacion-team');
        }).catch((err)=>{
            console.log(err);
        })   
         
  };

  const DataTable =()=>{
    GetLista()
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