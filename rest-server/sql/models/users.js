const db = require('../index.js');
const Sequelize = require('sequelize');

const Users = db.define('Users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

module.exports = Users;
