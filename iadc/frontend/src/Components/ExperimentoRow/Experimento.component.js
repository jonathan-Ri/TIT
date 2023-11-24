import React from "react";

const ExperimentoRow = (props) => {
    const { id_juego, fecha } = props.obj;
    
    const download=(event) =>{
      //descarga
      alert('descarga exitosa'+id_juego)
    };
    return (
      <tr>
        <td>{id_juego}</td>
        <td>{fecha}</td>
        <td>
          <button onClick={download}>Descargar</button>
        </td>
      </tr>
    );
  };

export default ExperimentoRow;