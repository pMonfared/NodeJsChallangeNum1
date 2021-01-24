const Joi = require('@hapi/joi');
const reqResponse = require('../../common/responseHandler');

const schema = Joi.object({
    startDate: Joi.date(),
    endDate: Joi.date(),
    minCount: Joi.number(),
    maxCount: Joi.number()
});

module.exports = function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(reqResponse.badRequestResponse(10001,"body data is not valid", error));

    next();
};