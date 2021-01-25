﻿﻿
//jest.setTimeout(30000)



const errorResponseHandler = require('../../../src/middlewares/errorResponseHandler');


describe('errorResponseHandler.middleware', () => {
    let mRes;
    let mNext;
    beforeEach(() => {
        mRes = { status: jest.fn().mockReturnThis(), send: jest.fn().mockReturnThis() };
        mNext = jest.fn();
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('Should return message error if the request is missing', () => {
        const mReq = null;
        const mErro = {message: "test error message"};
        errorResponseHandler(mErro,mReq, mRes, mNext);
        expect(mRes.status).toBeCalledWith(500);
        expect(mRes.status(500).send).toBeCalledWith({
            code: 500,
            msg: "Internal Server Error.",
            data: "Internal Server Error."
        });
    });


});