let express = require('express');
let CustomerCtrl = require('./src/routes/CustomerCtrl');

exports.router = (function () {

    const Router = express.Router();

    Router.route('/customer')
        .post(CustomerCtrl.create_customer)
        .get(CustomerCtrl.info_employe);

    return Router;
})