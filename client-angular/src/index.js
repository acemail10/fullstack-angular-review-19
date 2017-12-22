angular.module('myApp', [])
  .component('main', {
    controller: function($http) {

    },
    template: `
      <div>hello angular</div>

      <user-login></user-login>
      <br/><br/>
      
      <pokemon-search></pokemon-search>
    `
  })