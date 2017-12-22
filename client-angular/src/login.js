angular.module('myApp')
  .component('userLogin', {
    controller: function($http) {
      this.username = '';
      this.password = '';

      this.onSubmit = (user, pass) => {
        console.log('submit', user, pass);

        const payload = {
          username: user,
          password: pass
        };

        $http({
          method: 'POST',
          url: '/api/signup',
          data: payload
        }).then((response) => console.log(response));
      }


    },
    template: `
      <div>
        Username
        <input ng-model="$ctrl.username"/>
        {{$ctrl.username}}
      </div>

      <div>
        Password
        <input ng-model="$ctrl.password"/>
        {{$ctrl.password}}
      </div>

      <button ng-click="$ctrl.onSubmit($ctrl.username, $ctrl.password)">Sign Up</button>
    `
  });
