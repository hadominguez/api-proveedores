const handleError = require('../helpers/handleError');
const proveedor = require('../models/proveedores');

const getProveedores = async(req, res) => {
    try {
        return await proveedor.getProveedores(req, res);
    } catch (err) {
        handleError.error(req, res, err);
    }
};
const getProveedor = async(req, res) => {
    try {
        const {id} = req.params;
        return await proveedor.getProveedor(req, res, id);
    } catch (err) {
        handleError.error(req, res, err);
    }
};
const setProveedor = async(req, res) => {
    try {
        const {nombre, imagen} = req.body;
        return await proveedor.setProveedor(req, res, nombre, imagen);
    } catch (err) {
        handleError.error(req, res, err);
    }
};
const updateProveedor = async(req, res) => {
    try {
        const {proveedor_id, nombre, imagen} = req.body;
        return await proveedor.updateProveedor(req, res, proveedor_id, nombre, imagen);
    } catch (err) {
        handleError.error(req, res, err);
    }
};
const deleteProveedor = async(req, res) => {
    try {
        const {id} = req.params;
        return await proveedor.deleteProveedor(req, res, id);
    } catch (err) {
        handleError.error(req, res, err);
    }
};

module.exports = {
    getProveedores,
    getProveedor,
    setProveedor,
    updateProveedor,
    deleteProveedor
};