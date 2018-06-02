import express from 'express';
import bodyParser from 'body-parser';

import './common/mongoose';
import config from './common/config';
const log = require('./common/log')(module);

// ****************** Import routes *************

//***********************************************

const dev = process.env.NODE_ENV === 'development';
const test = process.env.NODE_ENV === 'test';
const prod = process.env.NODE_ENV === 'production';

export const app = express();
export const server = require('http').Server(app);

const timeToSendSocketData = 10000;

    //******************************** Run server ***************************

    server.listen(config.PORT, () => console.log(`Server run on ${config.PORT} port`));

    // *******************************************************************


if(prod) {

    //************************* GARBAGE magic ***********************************

    // Для работы с garbage collector запустите проект с параметрами:
    // node --nouse-idle-notification --expose-gc app.js
    let gcInterval;

    function init() {
        gcInterval = setInterval(function () {
            gcDo();
        }, 60000);
    };

    function gcDo() {
        global.gc();
        clearInterval(gcInterval);
        init();
    };

    init();

    //************************************************************
};

app.use(bodyParser.json());

//******************************** Routes ***************************


//******************************** Uncaught Exception ***************************

process.on('uncaughtException', function (err) {
    log.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    log.error(err.stack);
    process.exit(1);
});






