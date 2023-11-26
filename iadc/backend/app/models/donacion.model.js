module.exports = (sequelize, Sequelize) => {
    const Donacion = sequelize.define("Donacion", {
      
      id_donacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
      donacion: {
        type: Sequelize.INTEGER


      },
      id_jugador: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      id_ronda: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      }

      
      
      
      }
    });
    return Donacion;
  };
  