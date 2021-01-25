﻿
//jest.setTimeout(30000)



const { listRecord } = require('../../../src/controllers/recordController');
const { getAllByFilter }  = require('../../../src/services/recordService');

jest.mock('../../../src/services/recordService', () => ({ getAllByFilter: jest.fn() }));

describe('record.controller', () => {
    let mRes;
    let mNext;
    beforeEach(() => {
        mRes = { status: jest.fn().mockReturnThis(), send: jest.fn().mockReturnThis() };
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('Should return message error if the request is missing', async () => {
        const mReq = null;
        await listRecord(mReq, mRes);
        expect(mRes.status).toBeCalledWith(500);
        expect(mRes.status(500).send).toBeCalledWith({ "error": "There must be an error" });
    });


});