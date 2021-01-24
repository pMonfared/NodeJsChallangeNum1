﻿﻿﻿
const request = require('supertest');

const recordPostValidationSchema = require("../../../../src/validations/schema/record.post.validation.schema");

describe('record.post.body.validation', () => {
    let minCount = 0;
    let maxCount = 80;
    let startDate="2015-05-10";
    let endDate ="2017-01-28";

    let req = {};

    beforeEach(async () => {
        req = {
            minCount,
            maxCount,
            startDate,
            endDate
        };
    });


    it('should return error = undefined if object is valid', async () => {
        const {error} = recordPostValidationSchema.validate(req);

        expect(error).toBe(undefined);
    });


    it('should return error with full message if object is invalid', async () => {
        req.endDate = "2017-01-28z";

        const { error } = recordPostValidationSchema.validate(req);

        expect(error).toBeDefined();
    });
});