// Importe de dependencias
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// Inicialización de Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Importa modelos a Sequelize
db.ronda = require("./ronda.model.js")(sequelize, Sequelize);
db.donacion = require("./donacion.model.js")(sequelize, Sequelize);
db.negociacion = require("./negociacion.model.js")(sequelize, Sequelize);
db.juego = require("./juego.model.js")(sequelize, Sequelize);
db.jugador = require("./jugador.model.js")(sequelize, Sequelize);
db.castigo = require("./castigo.model.js")(sequelize, Sequelize);
db.prestigio = require("./prestigio.model.js")(sequelize, Sequelize);
db.equipo = require("./equipo.model.js")(sequelize, Sequelize);



db.juego.hasOne(db.ronda, {foreignKey: 'id_juego'});

db.ronda.hasOne(db.negociacion, {foreignKey: 'id_ronda'});
db.ronda.hasOne(db.donacion, {foreignKey: 'id_ronda'});

db.jugador.hasOne(db.donacion, {foreignKey: 'id_jugador'});

db.jugador.hasOne(db.castigo, {foreignKey: 'id_remitente'});
db.jugador.hasOne(db.castigo, {foreignKey: 'id_receptor'});

db.jugador.hasOne(db.prestigio, {foreignKey: 'id_receptor'});
db.jugador.hasOne(db.prestigio, {foreignKey: 'id_remitente'});

db.ronda.hasOne(db.prestigio, {foreignKey: 'id_ronda'});

db.equipo.hasOne(db.jugador, {foreignKey: 'id_equipo'});

module.exports = db;
