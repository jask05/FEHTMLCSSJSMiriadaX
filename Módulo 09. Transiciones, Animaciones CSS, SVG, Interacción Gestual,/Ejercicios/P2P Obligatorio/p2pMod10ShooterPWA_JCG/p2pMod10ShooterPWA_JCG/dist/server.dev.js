'use strict';

var express = require('express');

var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
/**
 * Starts the Express server.
 *
 * @return {ExpressServer} instance of the Express server.
 */


function startServer() {
  var app = express(); // Redirect HTTP to HTTPS,

  app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301)); // Logging for each request

  app.use(function (req, resp, next) {
    var now = new Date();
    var time = "".concat(now.toLocaleDateString(), " - ").concat(now.toLocaleTimeString());
    var path = "\"".concat(req.method, " ").concat(req.path, "\"");
    var m = "".concat(req.ip, " - ").concat(time, " - ").concat(path); // eslint-disable-next-line no-console

    console.log(m);
    next();
  }); // Handle requests for static files

  app.use(express["static"]('.')); // Start the server

  return app.listen('8000', function () {
    // eslint-disable-next-line no-console
    console.log('Local DevServer Started on port 8000...');
  });
}

startServer();