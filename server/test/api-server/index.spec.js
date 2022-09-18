'use strict';
const expect = require('chai').expect;
require('../../src/api-server'); //@todo maybe cleanup

const constants = require('../../src/constants');

const axios = require('axios');
const _ = require('lodash');

const SERVER_URL = `http://localhost:${constants.EXPRESS_PORT}/`;

suite('Testing Express API routes', () => {
  suite('GET /', () => {
    test('should respond with "Server is running" ', async () => {
      const { data: response } = await axios.get(SERVER_URL);
      expect(response).to.equal('Server is running');
    });
  });
});
