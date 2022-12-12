const express = require('express');
const proveedor = require('../controllers/proveedores');
const validator = require('../middleware/validator/proveedores');
const logger = require('../utils/logger');
const handleError = require('../helpers/handleError');

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      Proveedor:
 *          type: object
 *          properties:
 *              proveedor_id:
 *                  type: integer
 *                  description: id de la proveedor
 *              nombre:
 *                  type: string
 *                  description: nombre de la proveedor
 *              imagen:
 *                  type: string
 *                  description: imagen del proveedor
 *          required:
 *              - proveedor_id
 *              - nombre
 *              - imagen
 *          example:
 *              proveedor_id: 1
 *              nombre: Proveedor S.A.
 *              imagen: aaaaaaaaaa
 */
    
/**
* @swagger
* /api/proveedores:
*   get:
*       summary: return all proveedores
*       tags: [Proveedor]
*       responses:
*           200:
*               description: all proveedores
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Proveedor'
*/
router.get('/proveedores', async (req, res) => {
    try {
        res.json( await proveedor.getProveedores(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});


/**
* @swagger
* /api/proveedores/{id}:
*   get:
*       summary: return a proveedor
*       tags: [Proveedor]
*       parameters:
*           - name: id
*             description: id del proveedor
*             type: number
*             in: path
*             required: true
*       responses:
*           200:
*               description: a proveedor
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Proveedor'
*           400:
*               description: proveedor no existe
*/
router.get('/proveedores/:id', validator.validateGet, async (req, res) => {
    try {
        res.json(await proveedor.getProveedor(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});

/**
* @swagger
* /api/proveedores:
*   post:
*       summary: Adds a new proveedor
*       tags: [Proveedor]
*       requestBody:
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Proveedor'
*       responses:
*           200:
*               description: The proveedor was seccessfully created
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Proveedor'
*           500:
*               description: Some server error
*/
router.post('/proveedores/', validator.validateCreate, async (req, res) => {
    try {
        res.json(await proveedor.setProveedor(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});

/**
* @swagger
* /api/proveedores:
*   put:
*       summary: Update a proveedor
*       tags: [Proveedor]
*       requestBody:
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Proveedor'
*       responses:
*           200:
*               description: The proveedor was seccessfully updated
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Proveedor'
*           500:
*               description: Some server error
*/
router.put('/proveedores/', validator.validateUpdate, async (req, res) => {
    try {
        res.json(await proveedor.updateProveedor(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});



/**
* @swagger
* /api/proveedores/{id}:
*   delete:
*       summary: delete a proveedor
*       tags: [Proveedor]
*       parameters:
*           - name: id
*             description: id del proveedor
*             type: number
*             in: path
*             required: true
*       responses:
*           200:
*               description: a proveedor
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Proveedor'
*           400:
*               description: proveedor no existe
*/
router.delete('/proveedores/:id', validator.validateDelete, async (req, res) => {
    try {
        res.json(await proveedor.deleteProveedor(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});

module.exports = router;