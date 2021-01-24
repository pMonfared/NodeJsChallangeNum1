const { Record } = require("../models/record");
const _ = require("lodash");

module.exports = {
    getAllByFilter: async function (startDate, endDate, minCount, maxCount) {
        const records = await Record.find()
            .where('createdAt').gt(startDate).lt(endDate)
            .sort({ field: 'asc', _id: -1 });

        let rqList = [];
        if(records && records.length > 0){
            for (record of records){
                let rq = record.toObject();
                rqList.push(_.pick(rq, [
                    "key",
                    "createdAt",
                    "counts"
                ]));
            }
        }
        return rqList;
    },
};