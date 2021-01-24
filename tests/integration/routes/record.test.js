
const request = require('supertest');

let server;

describe('record.routes', () => {
    beforeEach(() => { server = require('../../../src/server');});
    afterEach(async () => {
        await server.close();
    });

    let minCount = 0;
    let maxCount = 80;
    let startDate="2015-05-10";
    let endDate ="2017-01-28";
    
    const exec = () => {
        return request(server)
            .post('/api/v1/record')
            .send({
                minCount,
                maxCount,
                startDate,
                endDate
            })
    };

    beforeEach(async () => {
        
    });


    it('should return 200 if req.body is valid', async () => {
        const res = await exec();

        expect(res.status).toBe(200);
    });

    it('should return 400 if req.body is invalid', async () => {
        endDate ="2017-01-28z";
        
        const res = await exec();

        expect(res.status).toBe(400);
    });


});