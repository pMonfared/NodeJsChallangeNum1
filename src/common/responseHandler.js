// 4XX status code related to client side error
// 5XX status code related to server side error

const getErrorStatus = require('../constants/ErrorData');

function findErrorMessage(status) {
    return getErrorStatus.ERROR_STATUS_ARRAY.find(v => v.status === status) || { error: 'There must be an error' };
}

/**
 * Success Response.
 * @param {number} code - Success response status
 * @param {string} successMessage - Success response message
 * @param {any} data - Success response custom data
 */
let successResponse = (data, code = 0, successMessage = "success") => {
    return {
        code,
        msg: successMessage,
        data
    }
};

/**
 * Success Response.
 * @param {number} code - Success response status
 * @param {string} msg - BadRequest response message
 * @param {any} data - Error response custom data
 */
let badRequestResponse = (code = 400, msg, data) => {
    return {
        code,
        msg,
        data
    }
};

/**
 * Error Response.
 * @param {number} statusCode - Error Status Code
 */
let errorResponse = (statusCode) => {
    return findErrorMessage(statusCode);
};


module.exports = {
    badRequestResponse,
    errorResponse,
    successResponse,
};