const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
    const dbHost = `${config.get('db.host')}`;
    console.log('connectionString:', dbHost);
    let dbOptions;
    dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    };
    mongoose.connect(dbHost, dbOptions)
        .then(()=> winston.info(`Connected to ${dbHost}...`));
};