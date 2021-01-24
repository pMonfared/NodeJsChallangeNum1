const { Record } = require("../models/record");
const _ = require("lodash");

module.exports = {
    getAllByFilter: async function (startDate, endDate, minCount, maxCount) {
        let conditions = [];

        //condition: calculate totalCount sum of count array numbers
        conditions.push({ $addFields: { totalCount: { $sum: "$counts" } }});

        //condition: filter on totalCount when minCount and maxCount filled
        if(minCount && maxCount){
            conditions.push({ $match : { "totalCount" : { $gt: minCount , $lt: maxCount } } })
        }
        else
        {
            //condition: filter on totalCount when only minCount filled
            if(minCount){
                conditions.push({ $match : { "totalCount" : { $gt: minCount } } })
            }
            //condition: filter on totalCount when only maxCount filled
            if(maxCount){
                conditions.push({ $match : { "totalCount" : { $lt: maxCount } } })
            }
        }

        
        //condition: filter on createdAt when startDate and endDate filled as Date format
        if(startDate && endDate){
            conditions.push({
                $match :
                    {
                        'createdAt': {
                            $gt: new Date(startDate),
                            $lt: new Date(endDate)
                        }
                    }
            })
        }
        else
        {
            //condition: filter on createdAt when only startDate filled as Date format
            if(startDate){
               conditions.push({
                   $match :
                       {
                           'createdAt': {
                               $gt: new Date(startDate)
                           }
                       }
               })
            }
            //condition: filter on createdAt when only endDate filled as Date format
            if(endDate){
                conditions.push({
                    $match :
                        {
                            'createdAt': {
                                $lt: new Date(endDate)
                            }
                        }
                })
            }
        }

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