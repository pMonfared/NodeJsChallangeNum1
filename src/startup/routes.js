const express = require('express');
const error = require('../middlewares/errorResponseHandler');
const apiRoutes = require('../routes/api.routes');

module.exports = function (app) {
    //Express advance config
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

    //Routes
    apiRoutes(app);

    //Error middleware
    app.use(error);
};