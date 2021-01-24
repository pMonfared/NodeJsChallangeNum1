const Joi = require('@hapi/joi');
const reqResponse = require('../common/responseHandler');

const schema = Joi.object({
    startDate: Joi.date().format('YYYY-MM-DD'),
    endDate: Joi.date().format('YYYY-MM-DD'),
    minCount: Joi.number().required(),
    maxCount: Joi.number().required()
});

module.exports = function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) res.status(400).send(reqResponse.badRequestResponse(10001,"body data is not valid", error));

    next();
};