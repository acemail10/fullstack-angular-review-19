const Users = require('./users.js');
const Pokemon = require('./pokemon.js');

Users.hasMany(Pokemon);
Pokemon.belongsTo(Users);

Users.sync()
  .then(() => {
    console.log('users sync success')
    Pokemon.sync()
      .then(() => console.log('pokemon sync success'))
      .catch(() => console.log('pokemon sync failed'))
  })
  .catch(() => console.log('users sync failed'))


module.exports = { Users, Pokemon };
