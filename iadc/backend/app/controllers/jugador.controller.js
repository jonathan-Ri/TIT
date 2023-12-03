// Importar dependencias
const db = require("../models");
const Persona = db.jugador;
const Op = db.Sequelize.Op;
// Crear una nuevo categoria 
exports.create = (req, res) => {
    // Validar consulta
    console.log(req.body)
    if (!req.body.id_equipo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Crear y guardar en base de datos
    Persona.create({
        id_jugador: req.body.id_jugador,
        fondo: req.body.fondo,
        imagen: req.body.imagen,
        id_equipo: req.body.id_equipo,

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
    const id_jugador = req.query.id_juego;
    var condition = id_jugador ? { id_juego: { [Op.like]: `%${id_jugador}%` } } : null;
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
// Buscar una categoria por su id_jugador
exports.findOne = (req, res) => {
    const id_jugador = req.params.id_jugador;
    Persona.findByPk(id_jugador)
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
// actualizar una categoria por su id_jugador
exports.update = (req, res) => {
    const id_jugador = req.params.id_jugador;
    Persona.update(req.body, {
        where: { id_jugador: id_jugador }
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
    const id_jugador = req.params.id_jugador;
    Persona.destroy({
        where: { id_jugador: id_jugador }
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