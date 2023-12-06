// Importar dependencias
const db = require("../models");
const Castigo = db.equipo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.id_equipo ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    Castigo.create({
        id_equipo: req.body.id_equipo,
        nombre_equipo: req.body.nombre_equipo,
        pozo_comun: req.body.pozo_comun
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Error al crear una equipo"
        });
    });
};

exports.findAll = (req, res) => {
    Castigo.findAll({ where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error en la búsqueda"
            });
        });
};
// Buscar una equipo por su id
exports.findOne = (req, res) => {
    const id_equipo = req.params.id_equipo;
    Castigo.findByPk(id_equipo)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la equipo.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar una equipo por su id
exports.update = (req, res) => {
    const id_equipo = req.params.id_equipo;
    Castigo.update(req.body, {
        where: { id_equipo: id_equipo }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "equipo actualzado."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el equipo`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un cliente
exports.delete = (req, res) => {
    const id = req.params.id_equipo;
    Castigo.destroy({
        where: { id_equipo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "equipo eliminado"
                });
            } else {
                res.send({
                    message: `equipo no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el equipo"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Castigo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Equipos eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas los equipos."
            });
        });
};
