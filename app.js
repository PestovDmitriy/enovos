'use strict';
const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();

const cors = require('cors');

app.use(cors());

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, async function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

});