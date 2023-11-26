module.exports = (sequelize, Sequelize) => {
    const Jugador = sequelize.define("Jugador", {
        
      id_jugador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true   
        
      },
      fondo: {
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.INTEGER
      },
      id_equipo: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      }
    });
    return Jugador;
  };
  