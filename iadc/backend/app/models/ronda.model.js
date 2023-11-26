module.exports = (sequelize, Sequelize) => {
    const Ronda = sequelize.define("Ronda", {
    id_ronda: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        
      },
      num_ronda: {
        type: Sequelize.INTEGER,
      },
      ronda_completada: {
        type: Sequelize.STRING,
      },
      id_juego: {
        type: Sequelize.INTEGER,
        foreignKey: true,
       
        
        
      }
    });
    return Ronda;
  };
  