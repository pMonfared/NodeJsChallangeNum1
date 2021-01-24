// if NODE_ENV value not define then dev value will be assign 
mode = process.env.NODE_ENV || 'dev';
// mode can be access anywhere in the project
const config = require('config').get(mode);

module.exports = function () {
    if(!config) {
        throw new Error('FETAL ERROR: config is not defined.');
    }
    
    return config;
};