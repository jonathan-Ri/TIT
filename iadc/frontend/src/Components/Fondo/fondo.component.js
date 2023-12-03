import React ,{ useState }from 'react';
import {Table} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import styles from './fondo.module.css'
import Juego from '../../Services/juego.service'
import ExperimentoRow from '../ExperimentoRow/Experimento.component';

const Fondo = () => {
    const navigate = useNavigate();
    const fecha= new Date(); 
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
    GetLista()
    const handleSubmit = () => {
        const juego ={"fecha": fecha}
        
        Juego.create(juego).then((res)=>{
            if (res.status === 200){
                let juego=res.data
                console.log(res.data.id)
                alert('juego creado con exito id'+res.data.id);
                //navigate('/team');
            }else{

                console.log("no es error de base de datos"+res);
                //navigate('/team');
            }
        }).catch((err)=>{
            console.log(err);
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