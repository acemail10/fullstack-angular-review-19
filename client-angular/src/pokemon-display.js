angular.module('myApp')
.component('pokemonDisplay', {
  controller: function() {
    // this.pokemonName = 'pikachu';

  },
  bindings: {
    pokemonName: '<',
    catchPokemon: '<'
  },
  template: `
    <h5>{{$ctrl.pokemonName.name}}</h5>
    <img src="{{$ctrl.pokemonName.image}}"/>
    <button ng-click="$ctrl.catchPokemon()">Catch</button>
  `
});
