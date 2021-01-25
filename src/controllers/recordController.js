
const recordService = require('../services/recordService');
const reqResponse = require('../common/responseHandler');

module.exports = {
    listRecord: async function (req, res) {
        try {
            let body = req.body;
            let params = req.params;
            let query = req.query;
            
            const data = await recordService.getAllByFilter(body.startDate,body.endDate, body.minCount, body.maxCount);

            return res.status(200).send(reqResponse.successResponse(data));
        }
        catch(error){
            return res.status(500).send(reqResponse.errorResponse(10002))
        }
    },
};