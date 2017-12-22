const express = require('express');
const router = express.Router();
const UserController = require('./controllers/user-controller.js');
const PokemonController = require('./controllers/pokemon-controller.js');

router.route('/signup')
  .post(UserController.signup);
  // .get(UserController.test)
router.route('/pokemon/search/:pokemon_id')
  .get(PokemonController.SearchPokemon);
router.route('/pokemon/catch')
  .post(PokemonController.CatchPokemon)
  .get(PokemonController.findAllByUser);

module.exports = router;
