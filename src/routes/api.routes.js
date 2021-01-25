const apiVersions = require('../constants/ApiVersions');
const apiV1 = apiVersions.API_VERSIONS.find(v => v.version === 1);

const recordApiRoutes = require("./api_v1/record.routes");

module.exports = function (app) {
    //Routes
    app.use(`${apiV1.prefixUri}/record`, recordApiRoutes);
};