﻿﻿const mongoose = require('mongoose');
const moment = require('moment');

const recordSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        maxlength:255
    },
    value: {
        type: String,
        maxlength:255
    },
    createdAt: {
        type: Date,
        required: true,
        default:moment().toDate().getUTCDate()
    },
    counts:[Number]
});

const Record = mongoose.model('records', recordSchema);

exports.Record = Record;