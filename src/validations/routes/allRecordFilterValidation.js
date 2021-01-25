
const reqResponse = require('../../common/responseHandler');

const schema = require("../schema/record.post.validation.schema"); 

module.exports = function (req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(reqResponse.badRequestResponse(10001,"body data is not valid", error));

    next();
};