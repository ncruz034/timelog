require("babel-polyfill");
const winston = require('winston');
const cors = require('cors');
const express = require('express');
const app = express();
//Remove cors in production app
app.use(cors());

/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
*/

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist/'));
}

require('./startup/routes')(app);
require('./startup/logging');
require('./startup/databaseInit')();
require('./startup/config')();
require('./startup/prod')(app);
//require('./startup/validation')();

//const port = process.env.PORT || 3000;
const port = process.env.PORT || 8080;
app.listen(port ,()=>winston.info(`Listening on port ${port}...`));
