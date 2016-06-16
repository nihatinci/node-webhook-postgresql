"use strict";

let winston = require("winston");
let transport;
let level = "debug";
transport = new winston.transports.Console({ level: level })

module.exports = new winston.Logger({ transports: [transport]});
