var Bookshelf = require('../lib/DBConnect');

var User = Bookshelf.Model.extend({

    tableName: 'users.users',
    hasTimestamps: false,

});

module.exports = User;