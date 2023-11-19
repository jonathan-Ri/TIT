// Importar dependencias
const db = require("../models");
const Sale = db.productos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req.Codigo)
    if (!req.body.Codigo ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    Sale.create({
        Codigo: req.body.Codigo,
        nombre_producto: req.body.nombre_producto,
        cantidad_total: req.body.cantidad_total,
        marca_producto: req.body.marca_producto,
        EmpleadoRUT: req.body.EmpleadoRUT,
        ProveedoreId: req.body.ProveedoreId,
  
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
    Sale.findAll({ where: {} })
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
    const Codigo = req.params.Codigo;
    Sale.findByPk(Codigo)
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
    const Codigo = req.params.Codigo;
    Sale.update(req.body, {
        where: { Codigo: Codigo }
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
    const id = req.params.Codigo;
    Sale.destroy({
        where: { Codigo: id }
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
    Sale.destroy({
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
