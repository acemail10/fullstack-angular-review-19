
const axios = require('axios');
const { Pokemon } = require('../../sql/models/index.js');

const PokemonController = {
  SearchPokemon: (req, res) => {
    // console.log('req.url: ', req.url);
    console.log('params', req.params);
    // console.log('data', req.data);

    axios.get('http://pokeapi.co/api/v2/pokemon/' + req.params.pokemon_id)
      .then(response => {
        console.log('success pokemon', response)
        const payload = {
          name: response.data.name,
          image: response.data.sprites.front_shiny
        }
        res.status(200).send(payload);
      })
      .catch(err => {
        console.log('err getting pokemon', err)
        res.status(500).send('err getting pokemon', err);
      });
  },
  CatchPokemon: (req, res) => {
    Pokemon.create({
      name: req.body.name,
      image: req.body.image,
      userId: req.body.id
    })
      .then(response => {
        console.log('success pokemon catch', response)
        res.status(201).send('caught success!');
      })
      .catch(err => {
        console.log('err getting pokemon catch', err)
        res.status(500).send('err getting pokemon catch', err);
      });
    },
  findAllByUser: (req, res) => {
    Pokemon.findAll({
      where: {
        userId: 1 // TODO: make this dynamic based on request, add functionality to client
      }
    })
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send('err finding from db', err);
    });

  }
};

module.exports = PokemonController;