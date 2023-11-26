// Importar dependencias
const db = require("../models");
const Usuario = db.ronda;
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
    const usuario= {
        id_ronda:req.body.id_ronda,
        numero_ronda: req.body.numero_ronda,
        ronda_completada: req.body.ronda_completada,
        id_juego: req.body.id_juego


    };
    // Guardar en base de datos
    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear un nuevo cliente"
            });
        });
};
// Retornar todos los clientes de la base de datos.
exports.findAll = (req, res) => {
    console.log("Hola, mundo!"); // Muestra "Hola, mundo!" en la consola

    const name = req.query.id_ronda;
    var condition = name ? { id_ronda: { [Op.like]: `%${name}%` } } : null;
    Usuario.findAll({ where: condition })
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
    const id = req.params.id_ronda;
    Usuario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró al cliente.`
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
    Usuario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cliente actualzado."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar al cliente`
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
    const id = req.params.id_ronda;
    Usuario.destroy({
        where: { id_ronda: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cliente eliminado"
                });
            } else {
                res.send({
                    message: `Cliente no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar cliente"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Usuario.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} clientes eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar a todos los clientes."
            });
        });
};
