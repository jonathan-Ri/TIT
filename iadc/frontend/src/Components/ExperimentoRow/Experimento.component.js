import React from "react";
import JuegoService from "../../Services/juego.service";

const ExperimentoRow = (props) => {
    const { id_juego, fecha } = props.obj;
    
    const download=(event) =>{
      //descarga
      alert('descarga exitosa'+id_juego)
    };
    const eliminar=(event) =>{
      JuegoService.remove(id_juego).then((res)=>{
        alert('el experimento'+id_juego+'se elimino exitosamente')
      }).catch((err)=>{
        alert(err)
      })
      
    };
    return (
      <tr>
        <td>{id_juego}</td>
        <td>{fecha}</td>
        <td>
          <button onClick={download}>Descargar</button>
        </td>
        <td>
          <button onClick={eliminar}>Eliminar</button>
        </td>
      </tr>
    );
  };

export default ExperimentoRow;