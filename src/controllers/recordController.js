
const recordService = require('../services/recordService');
const reqResponse = require('../common/responseHandler');

module.exports = {
    listRecord: async function (req, res) {
        try {
            let body = req.body;
            let params = req.params;
            let query = req.query;

            const data = recordService.getAllByFilter(body.startDate,body.endDate, body.minCount, body.maxCount);

            res.status(200).send(reqResponse.successResponse(data));
        }
        catch(error){
            console.error(error);
            res.status(502).send(reqResponse.errorResponse(502))
        }
    },
    
};