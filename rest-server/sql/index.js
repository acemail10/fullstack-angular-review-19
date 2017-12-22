const path = require('path');
const Sequelize = require('sequelize');
const db = new Sequelize('dbname', null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'mydbfilename.sqlite')
})

db.authenticate()
  .then(() => console.log('db works'))
  .catch((err) => console.log('db connection failed', err))

module.exports = db;
