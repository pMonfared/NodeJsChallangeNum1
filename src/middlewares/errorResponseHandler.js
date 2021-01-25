const winston = require('winston');
const responseHandler = require("../common/responseHandler");

module.exports = function(err, req, res, next) {
    // Log the exception
    // logging level: error, warning, information, verbose, debug, silly
    winston.error(err.message, err);
    return res.status(500).send(responseHandler.errorResponse(500));
};