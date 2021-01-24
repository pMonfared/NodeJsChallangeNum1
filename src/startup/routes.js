const express = require('express');
const error = require('../middleware/error');
const apiRoutes = require('../routes/api.routes');

module.exports = function (app) {
    //Express advance config
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.static('public'));

    //Routes
    apiRoutes(app);

    //View config
    app.set('view engine', 'pug');
    app.set('views', './views');

    //Error middleware
    app.use(error);
};