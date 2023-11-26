module.exports = (sequelize, Sequelize) => {
    const Equipo = sequelize.define("Equipo", {
      
      id_equipo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
        
      nombre_equipo: {
        type: Sequelize.STRING,


      },
      pozo_comun: {
        type: Sequelize.INTEGER,
      }

      
      
      
      }
    });
    return Equipo;
  };
  