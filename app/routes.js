const proveedores = require('./routes/proveedores');
const path = require('path');
const ConfigEnv = require('./config/config');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API-DOC Proveedores",
            version: "1.0.0",
            description: "API for Proveedores"
        },
        servers: [{
            url: 'http://'+ ConfigEnv.HTTP_HOST +':'+ ConfigEnv.HTTP_PORT 
        }]
    },
    apis: [`${path.join(__dirname,"./routes/*.js")}`],
};

module.exports = function (app){
    app.use("/api", proveedores);
    app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
}