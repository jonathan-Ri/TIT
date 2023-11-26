// Importar dependencias
const db = require("../models");
const Castigo = db.castigo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.id_ronda ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    Castigo.create({
        id_castigo: req.body.id_castigo,
        monto: req.body.monto,
        id_remitente: req.body.id_remitente,
        id_receptor: req.body.id_receptor,

        id_ronda: req.body.id_ronda,

  
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Error al crear una categoria"
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
// Buscar una categoria por su id
exports.findOne = (req, res) => {
    const id_castigo = req.params.id_castigo;
    Castigo.findByPk(id_castigo)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la categoria.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar una categoria por su id
exports.update = (req, res) => {
    const id_castigo = req.params.id_castigo;
    Castigo.update(req.body, {
        where: { id_castigo: id_castigo }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoria actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la categoria`
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
    const id = req.params.id_castigo;
    Castigo.destroy({
        where: { id_castigo: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoria eliminada"
                });
            } else {
                res.send({
                    message: `Categoria no encontrada`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la categoria"
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
            res.send({ message: `${nums} Categorias eliminadas!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas las categorias."
            });
        });
};
