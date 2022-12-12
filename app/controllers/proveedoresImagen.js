const handleError = require('../helpers/handleError');
const proveedor = require('../models/proveedores');
const crypto = require('crypto');
const path = require("path");


const getProveedorImagen = async(req, res) => {
    try {
        const {id} = req.params;
        let file = path.join(__dirname, '/../upload/'+ id);
        return file;
    } catch (err) {
        handleError.error(req, res, err);
    }
};

const updateProveedorImagen = async(req, res) => {
    try {
        const {proveedor_id, nombre } = req.body;
        const { imagen } = req.files;
        if (!imagen){
            return res.sendStatus(400);
        }
        if (!(imagen.mimetype.substr(0,6) == 'image/')){
            return res.sendStatus(400);
        }
        const hash = crypto.createHash('sha256').update(imagen.name + new Date().toString()).digest('hex');
        imagen.mv(__dirname + '/../upload/' + hash);
        return await proveedor.updateProveedorImagen(req, res, proveedor_id, hash);
    } catch (err) {
        handleError.error(req, res, err);
    }
};

const deleteProveedorImagen = async(req, res) => {
    try {
        const {id} = req.params;
        return await proveedor.deleteProveedorImagen(req, res, id);
    } catch (err) {
        handleError.error(req, res, err);
    }
};


module.exports = {
    getProveedorImagen,
    updateProveedorImagen,
    deleteProveedorImagen
};