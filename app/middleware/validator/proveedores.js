const validator = require('express-validator');
const logger = require('../../utils/logger');
const handleError = require('../../helpers/handleError');
const util = require('util');

const validate = (req, res, next) => {
    try {
        validator.validationResult(req).throw();
        logger.warn( 'REQUEST: IP: '+ req.ip + ' - URL: '+ req.originalUrl);
        return next();
    } catch (err) {
        err.message = err.errors;
        handleError.error(req, res, err);
        logger.warn( 'REQUEST: IP: '+ req.ip + ' - URL: '+ req.originalUrl + ' - Message: '+ util.inspect(err.message));
    }
}

const validateCreate = [
    validator.check('nombre')
    .exists()
    .notEmpty(),
    validator.check('imagen')
    .exists()
    .notEmpty(),
    (req, res, next) =>{
        validate(req, res, next)
    }
]
const validateGet = [
    validator.check('id')
    .exists()
    .notEmpty()
    .isNumeric(),
    (req, res, next) =>{
        validate(req, res, next)
    }
]
const validateUpdate = [
    validator.check('proveedor_id')
    .exists()
    .notEmpty()
    .isNumeric(),
    validator.check('nombre')
    .exists()
    .notEmpty(),
    validator.check('imagen')
    .exists()
    .notEmpty(),
    (req, res, next) =>{
        validate(req, res, next)
    }
]
const validateDelete = [
    validator.check('id')
    .exists()
    .notEmpty(),
    (req, res, next) =>{
        validate(req, res, next)
    }
]

module.exports = {
    validateCreate, validateGet, validateUpdate, validateDelete
}