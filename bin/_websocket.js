"use strict";

let app = require('../websocketApp');
let logger = require('../config/logger');
let webSocketUtil = require('../websocket/util');


let port = process.env.PORT || 4000;

app.listen(port, function () {
  logger.info((webSocketUtil.useSsl() ? 'https/wss' : 'http/ws') + ' listening on ' + port);
});
