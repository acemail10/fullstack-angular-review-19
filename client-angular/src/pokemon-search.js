angular.module('myApp')
.component('pokemonSearch', {
  controller: function($http) {
    this.searchID = '';
    this.pokemon = {};
    this.id = '';
    this.getPokemon = (searchTerm) => {
      console.log('searching pokemon', searchTerm);
      $http({
        method: 'GET',
        url: '/api/pokemon/search/' + searchTerm,
      })
        .then((response) => {
          console.log(response.data);
          this.pokemon = response.data;
        })
        .catch(err => console.log(err));
    };

    this.catchPokemon = () => {
      const payload = {
        name: this.pokemon.name,
        image: this.pokemon.image,
        userId: this.id
      };
      $http({
        method: 'POST',
        url: '/api/pokemon/catch/',
        data: payload
      })
        .then((response) => {
          console.log(response.data);
          // this.pokemon = response.data;
        })
        .catch(err => console.log(err));
    };

  },
  template: `
  Set Owner <input ng-model="$ctrl.id"/>
  <br/>
  Search for a Pokemon (by ID#) <input ng-model="$ctrl.searchID"/>
  <button ng-click="$ctrl.getPokemon($ctrl.searchID)"> Search! </button>
  <pokemon-display
    pokemon-name="$ctrl.pokemon"
    catch-pokemon="$ctrl.catchPokemon"
  ></pokemon-display>
  `
});
