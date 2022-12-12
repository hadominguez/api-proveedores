const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const ConfigEnv = require('./config/config');
const logger = require('./utils/logger');
const app = express();

app.use(cors());
app.use(express.json());

app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

require('./routes')(app);

app.listen(
    ConfigEnv.HTTP_PORT,
    () => {
        logger.info(`Escuchando en el puerto ${ConfigEnv.HTTP_PORT}`)
    }
);