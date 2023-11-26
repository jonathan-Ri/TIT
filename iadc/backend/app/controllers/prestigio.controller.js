// Importar dependencias
const db = require("../models");
const Prestigio = db.prestigio;
const Op = db.Sequelize.Op;
// Crear un nuevo cliente
exports.create = (req, res) => {
    // Validar consulta
    if (!req.body.id_ronda) {
        res.status(400).send({
            message: "Content can not be emptyy!"
        });
        return;
    }
    // Create a Cliente
    const prestigio= {
        id_prestigio:req.body.id_prestigio,
        monto: req.body.monto,
        id_remitente: req.body.id_remitente,
        id_receptor: req.body.id_receptor,

        id_juego: req.body.id_juego


    };
    // Guardar en base de datos
    Prestigio.create(prestigio)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al agregar un nuevo prestigio"
            });
        });
};
// Retornar todos los clientes de la base de datos.
exports.findAll = (req, res) => {

    const name = req.query.id_ronda;
    var condition = name ? { id_ronda: { [Op.like]: `%${name}%` } } : null;
    Prestigio.findAll({ where: condition })
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
// Buscar un cliente por su id
exports.findOne = (req, res) => {
    const id = req.params.id_prestigio;
    Prestigio.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el prestigio del jugador.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar un cliente por su id
exports.update = (req, res) => {
    const id = req.params.id_ronda;
    Prestigio.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Prestigio actualizado."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el prestigio`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// eliminar un cliente
exports.delete = (req, res) => {
    const id = req.params.id_prestigio;
    Prestigio.destroy({
        where: { id_prestigio: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Prestigio eliminado"
                });
            } else {
                res.send({
                    message: `Prestigio no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar prestigio de jugador "
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Prestigio.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} prestigio eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar a todos los prestigio."
            });
        });
};
