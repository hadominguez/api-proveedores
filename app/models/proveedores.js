const db = require('../db');

const getProveedores = async(req, res) => {
    query ={
        text: 'SELECT proveedor_id, nombre, imagen FROM public.proveedores;',
        values : []
    };
    return await db.consulta(req, res, query);
}

const getProveedor = async(req, res, proveedor_id) => {
    query ={
        text: 'SELECT proveedor_id, nombre, imagen FROM public.proveedores WHERE proveedor_id = $1;',
        values : [proveedor_id]
    };
    return await db.consulta(req, res, query);
}

const setProveedor = async(req, res, nombre) => {
    query ={
        text: 'INSERT INTO public.proveedores( nombre) VALUES ($1 );',
        values : [nombre]
    };
    await db.consulta(req, res, query);
}

const updateProveedor = async(req, res, proveedor_id, nombre) => {
    query ={
        text: 'UPDATE public.proveedores SET nombre=$2 WHERE proveedor_id=$1;',
        values : [proveedor_id, nombre]
    };
    await db.consulta(req, res, query);
}

const deleteProveedor = async(req, res, proveedor_id) => {
    query ={
        text: 'DELETE FROM public.proveedores WHERE proveedor_id = $1;',
        values : [proveedor_id]
    };
    await db.consulta(req, res, query);
}


const updateProveedorImagen = async(req, res, proveedor_id, imagen) => {
    query ={
        text: 'UPDATE public.proveedores SET imagen=$2 WHERE proveedor_id=$1;',
        values : [proveedor_id, imagen]
    };
    await db.consulta(req, res, query);
}

const deleteProveedorImagen = async(req, res, proveedor_id) => {
    query ={
        text: 'UPDATE public.proveedores SET imagen=NULL WHERE proveedor_id=$1;',
        values : [proveedor_id]
    };
    await db.consulta(req, res, query);
}

module.exports = {
    getProveedores,
    getProveedor,
    setProveedor,
    updateProveedor,
    deleteProveedor,
    updateProveedorImagen,
    deleteProveedorImagen
  }