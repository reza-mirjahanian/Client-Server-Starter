'use strict';

const isDevMode = process.env.NODE_ENV !== 'production',
  isTestMode = process.env.NODE_ENV === 'test';

const EXTERNAL_REPO = {
  API_URL: process.env.SERVER_URL || 'https://dummyjson.com',
  API_KEY: process.env.CHAT_API_KEY || '122',
};

const MYSQL = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'reza',
};

const constants = {
  EXPRESS_PORT: Number(process.env.PORT) || 3200,
  MYSQL,
  EXTERNAL_REPO,
};

module.exports = constants;
