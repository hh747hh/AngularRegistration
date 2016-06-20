myApp.controller('RegistrationController', ['$scope', function($scope){

  $scope.login = function() {
    $scope.messege = "Welcome " +$scope.user.email;
  };

  $scope.register = function() {
    $scope.messege = "Welcome" +
    $scope.user.firstname;
  };


}]);
