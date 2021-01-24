const express = require('express');
const winston = require('winston');
require('express-async-errors');

const cors = require('cors');
const corsConfig = require('./startup/cors');


const app = express();
app.use(cors(corsConfig));

const config = require('./startup/config')();
require('./startup/prod')(app);
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();


const port = process.env.PORT || 3000;
const server = app.listen(port,()=>{ winston.info(`Listening on port ${port}...`); });


module.exports = server;