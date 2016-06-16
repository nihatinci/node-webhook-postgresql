"use strict";

let logger = require('../config/logger');
let forever = require('forever-monitor');

// use forever to start a script
function start(file) {
  let child = new (forever.Monitor)(__dirname + '/' + file);

  child.on('restart', function() {
    logger.error('Forever restarting script for ' + child.times + ' time');
  });

  child.start();
}

module.exports = {
  start: start
}