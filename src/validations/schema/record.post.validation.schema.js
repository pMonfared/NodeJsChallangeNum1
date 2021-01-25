const Joi = require('@hapi/joi');
const reqResponse = require('../../common/responseHandler');

const schema = Joi.object({
    startDate: Joi.date().iso(),
    endDate: Joi.date().iso(),
    minCount: Joi.number(),
    maxCount: Joi.number()
});

module.exports = schema;