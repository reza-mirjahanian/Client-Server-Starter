'use strict';
const express = require('express'),
  constants = require('../constants'),
  cors = require('cors'),
  productRoute = require('./routes/product.router'),
  logger = require('../utils/logger');
const bodyParser = require('body-parser');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// main page
app.get('/', (req, res) => res.send('Server is running'));

app.use(productRoute);

app.listen(constants.EXPRESS_PORT, () =>
  logger.log(`listening on port ${constants.EXPRESS_PORT}!`)
);
