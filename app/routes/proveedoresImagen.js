const express = require('express');
const proveedor = require('../controllers/proveedoresImagen');
const validator = require('../middleware/validator/proveedoresImagen');
const handleError = require('../helpers/handleError');

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      ProveedorImagen:
 *          type: object
 *          properties:
 *              proveedor_id:
 *                  type: integer
 *                  description: id de la proveedor
 *              imagen:
 *                  type: file
 *                  description: imagen del proveedor
 *          required:
 *              - proveedor_id
 *              - imagen
 *          example:
 *              proveedor_id: 1
 *              imagen: aaaaaaaaaa
 */

/**
* @swagger
* /api/proveedores/imagen/{id}:
*   get:
*       summary: return a image
*       tags: [ProveedorImagen]
*       parameters:
*           - name: id
*             description: hash de la imagen
*             type: string
*             in: path
*             required: true
*       responses:
*           200:
*               description: a image
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/ProveedorImagen'
*           400:
*               description: proveedor no existe
*/
router.get('/proveedores/imagen/:id', async (req, res) => {
    try {
        res.sendFile(await proveedor.getProveedorImagen(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});



/**
* @swagger
* /api/proveedores/imagen:
*   put:
*       summary: Update a proveedor
*       tags: [ProveedorImagen]
*       requestBody:
*           content:
*               multipart/form-data:
*                   schema:
*                       $ref: '#/components/schemas/ProveedorImagen'
*       responses:
*           200:
*               description: The proveedor was seccessfully updated
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/ProveedorImagen'
*           500:
*               description: Some server error
*/
router.put('/proveedores/imagen/', validator.validateUpdate, async (req, res) => {
    try {
        res.json(await proveedor.updateProveedorImagen(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});



/**
* @swagger
* /api/proveedores/imagen/{id}:
*   delete:
*       summary: delete a proveedor
*       tags: [ProveedorImagen]
*       parameters:
*           - name: id
*             description: id del proveedor
*             type: number
*             in: path
*             required: true
*       responses:
*           200:
*               description: a image
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/ProveedorImagen'
*           400:
*               description: proveedor no existe
*/
router.delete('/proveedores/imagen/:id', validator.validateDelete, async (req, res) => {
    try {
        res.json(await proveedor.deleteProveedorImagen(req, res));
    } catch (err) {
        handleError.error(req, res, err);
    }
});


module.exports = router;