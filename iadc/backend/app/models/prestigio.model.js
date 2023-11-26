module.exports = (sequelize, Sequelize) => {
    const Prestigio = sequelize.define("Prestigio", {
      
      id_prestigio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
        
      monto: {
        type: Sequelize.INTEGER


      },
      id_remitente: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      id_receptor: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      id_ronda: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      }

      
      
      
      }
    });
    return Prestigio;
  };
  