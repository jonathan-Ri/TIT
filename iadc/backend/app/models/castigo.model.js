module.exports = (sequelize, Sequelize) => {
    const Castigo = sequelize.define("Castigo", {
      
      id_castigo: {
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
    return Castigo;
  };
  