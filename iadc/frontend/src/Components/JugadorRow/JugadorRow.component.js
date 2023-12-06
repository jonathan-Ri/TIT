import React from "react";

const ExperimentoRow = (props) => {
    const { id_jugador, estado } = props.obj;
    
    const download=(event) =>{
      //descarga
      alert('descarga exitosa'+id_juego)
    };
    return (
      <tr>
        <td>{id_juego}</td>
        <td>{fecha}</td>
      </tr>
    );
  };

export default ExperimentoRow;