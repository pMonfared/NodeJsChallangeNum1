const winston = require('winston');
const mongoose = require('mongoose');
// if NODE_ENV value not define then dev value will be assign 
mode = process.env.NODE_ENV || 'development';
// mode can be access anywhere in the project
const config = require('config').get(mode);

module.exports = function () {
    const dbHost = config.database.host || config.database.host;
    console.log('connectionString:', dbHost);
    let dbOptions;
    dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    };
    mongoose.connect(dbHost, dbOptions).then(
        () => winston.info(`Connected to ${dbHost}...`),
        err => winston.error(err)
    );
};