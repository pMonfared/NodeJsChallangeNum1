const { Record } = require("../models/record");

module.exports = {
    getAllByFilter: async function (startDate, endDate, minCount, maxCount) {
        const records = await Record.find()
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