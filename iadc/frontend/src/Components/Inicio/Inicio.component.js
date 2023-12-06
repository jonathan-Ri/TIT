import React, { useState } from 'react';
import styles from './Inicio.module.css';
import { useNavigate } from 'react-router-dom';
import jugadorService from '../../Services/jugador.service';

const Inicio = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.clear();

    try {
      const res = await jugadorService.getAll();
      const datos = res.data;
      console.log(datos);

      // Verifica si el ID está en la base de datos
      const jugadorEncontrado = datos.find((jugador) => jugador.id_jugador === mensaje);

      if (jugadorEncontrado) {
        await jugadorService.update(jugadorEncontrado.id_jugador, { estado: 1 });

        localStorage.setItem('id', mensaje);
        localStorage.setItem('equipo', String(jugadorEncontrado.id_equipo));
        alert('Se logró ingresar exitosamente');
        navigate('/donar'); // Redirige a la página deseada después de la verificación exitosa
      } else {
        alert('ID no encontrado en la base de datos');
      }
    } catch (err) {
      alert('Error al obtener los datos');
      console.log(err);
    }
  };

  return (
    <div className={styles.bodiContainer}>
      <div className={styles.bodi}>
        <form className={styles.formInicio} onSubmit={handleSubmit}>
          <label className={styles.Titulo}>Ingrese su ID asignado</label>
          <input
            className={styles.imputInicio}
            type="text"
            id="id"
            name="id"
            placeholder="Ej: A1B2C3"
            onChange={handleMensajeChange}
          />
          <br />
          <button type="submit">Aceptar</button>
        </form>
      </div>
    </div>
  );
};

export default Inicio;