module.exports = (sequelize, Sequelize) => {
    const Negociacion = sequelize.define("Negociacion", {
      id_negociacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true   


      },
      continuar: {
        type: Sequelize.BOOLEAN,

      },
      id_ronda: {
        type: Sequelize.INTEGER,
        foreignKey: true,

      }
    });
    return Negociacion;
  };
  