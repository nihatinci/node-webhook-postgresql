"use strict";

let express = require('express');
let router = express.Router();
let logger = require('../../../config/logger');
let User = require('../../../models/User');


/**
 * @action GETUsers
 * @method GET
 * @summary get all users in the database
 * @throws 500: for validation problems, db problems
 * @return status code 200 on success
 */
router.get('/GETUsers', function (req, res, next) {
    console.log("test");
    User.forge()
        .fetch()
        .then(function (collection) {
            res.json({error: false, data: collection.toJSON()});
        })
        .catch(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
        });
});



module.exports = router;