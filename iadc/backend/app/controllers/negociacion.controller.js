// Importar dependencias
const db = require("../models");
const Persona = db.negociacion;
const Op = db.Sequelize.Op;
// Crear una nuevo categoria 
exports.create = (req, res) => {
    // Validar consulta
    console.log(req.body)
    if (!req.body.id_ronda) {
        res.status(400).send({
            message: "Content canN not be empty!"
        });
        return;
    }
    // Crear y guardar en base de datos
    Persona.create({
            id_negociacion: req.body.id_negociacion,
            continuar: req.body.continuar,
            id_ronda: req.body.id_ronda
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
// Retornar todos las categorias de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Persona.findAll({ where: condition })
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
    const id = req.params.id_negociacion;
    Persona.findByPk(id)
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
    const id = req.params.id_negociacion;
    Persona.update(req.body, {
        where: { id_negociacion: id }
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
    const id = req.params.id_negociacion;
    Persona.destroy({
        where: { id_negociacion: id }
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
    Persona.destroy({
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