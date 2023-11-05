module.exports = (sequelize, Sequelize) => {
    const Alarma = sequelize.define("Historial_Compra", {
      
      Documento: {
        type: Sequelize.STRING
      }
    });
    return Alarma;
  };
  