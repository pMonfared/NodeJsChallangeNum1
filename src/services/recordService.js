const { Record } = require("../models/record");
const _ = require("lodash");

module.exports = {
    getAllByFilter: async function (startDate, endDate, minCount, maxCount) {
        let conditions = [];

        //condition: calculate totalCount sum of count array numbers
        conditions.push({ $addFields: { totalCount: { $sum: "$counts" } }});


        //condition: filter on totalCount when minCount and/or maxCount filled
        let minMax = {};
        if(minCount)
            minMax.$gt = minCount;
        if(maxCount)
            minMax.$lt = maxCount;
        if(minMax)
            conditions.push({ $match : { "totalCount" : minMax } });

        //condition: filter on createdAt when startDate and/or endDate filled as Date format
        let startDtEndDt = {};
        if(startDate)
            startDtEndDt.$gt = new Date(startDate);
        if(endDate)
            startDtEndDt.$lt = new Date(endDate);
        if(startDtEndDt)
            conditions.push({ $match : { "createdAt" : startDtEndDt } });

        //select fields as need as you want
        conditions.push({
            $project: {
                _id: 0,
                key:1,
                createdAt:1,
                totalCount:1,
            }
        });

        //filter and fetch data from Database
        return Record.aggregate(conditions);
    },
};