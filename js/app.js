var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['routerProvider', function($routerProvider) {
  $routerProvider.
  when('/login', {
    templateUrl: 'views/login.html',
    controller: 'RegistrationController'
  }).
  when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegistrationController'
  }).
  when('/success', {
    templateUrl: 'view/success.html',
    controller: 'SuccessController'
  }).
  otherwise({
    redirectTo: '/login'
  });
}]);
