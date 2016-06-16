"use strict";

let app = require('../app');
let logger = require('../config/logger');


let port = process.env.PORT || 5000;

let server = app.listen(port, function() {
  logger.info('Two way text API server listening on port ' + server.address().port);
});
