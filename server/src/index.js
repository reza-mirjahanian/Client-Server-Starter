'use strict';

require('./api-server');
const DB = require('./utils/mysql');
const userModel = require('./repository/user');

const init = async () => {
  try {
    await DB.init();
    // await userModel.create({
    //   email: 'reza@mir.com',
    //   password: '1234568',
    //   title: 'myTitle',
    //   firstName: 'Reza',
    //   lastName: 'Mirjah',
    //   role: 'admin',
    // });
    let users = await userModel.getAll();
    for (let user of users) {
      console.log(user.firstName + ' ' + user.lastName);
    }
  } catch (e) {
    console.log(e);
  }
};
init().then(() => {});

console.log('Server Is Running!');

process
  .on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at Promise', {
      reason,
      p,
    });
  })
  .on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown', {
      err,
    });
  });
