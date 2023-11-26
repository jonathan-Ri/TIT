module.exports = (sequelize, Sequelize) => {
    const Juego = sequelize.define("Juego", {
        
      id_juego: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true   
        
      },
      fecha: {
        type: Sequelize.STRING
      }
    });
    return Juego;
  };
  