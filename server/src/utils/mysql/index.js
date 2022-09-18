const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const constants = require('../../constants');

const DB = {};

DB.init = async function () {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = constants.MYSQL;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    dialect: 'mysql',
  });

  // init models and add them to the exported db object
  DB.User = require('./user.model')(sequelize);

  // sync all models with database
  await sequelize.sync({ alter: true });
};

module.exports = DB;
