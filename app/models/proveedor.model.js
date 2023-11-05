module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("Cliente", {
      RUT_clientes: {
        type: Sequelize.STRING,
        primaryKey: true,
         

      },
      numero_telefonico: {
        type: Sequelize.STRING
      },
      correo_electronico: {
        type: Sequelize.STRING
      },
    direccion: {
        type: Sequelize.STRING
      },
      empresa: {
        type: Sequelize.STRING
      }
    });
    return Sale;
  };
  