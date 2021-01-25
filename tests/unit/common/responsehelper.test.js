﻿﻿﻿
const request = require('supertest');

const responseHandler = require("../../../src/common/responseHandler");

describe('response.helper', () => {
    let expectedObj = {
        code: 502,
        msg: "JWT token Error",
        data: "Error occure while genrating user token."
    };
    
    it('should return object as expectedObject if statusCode is defined', async () => {
        const obj = responseHandler.errorResponse(502);
        
        expect(obj).toStrictEqual(expectedObj);
    });


});