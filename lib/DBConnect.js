let pg = require('pg');
console.log("test");
let config = require("../config/config.json");
let dbConfig = config.database;

var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : dbConfig.host,
        port     : dbConfig.port,
        user     : dbConfig.user,
        password : dbConfig.password,
        database : dbConfig.database,
        charset  : 'utf8'
    }
});

var Bookshelf = require('bookshelf')(knex);

module.exports = Bookshelf;