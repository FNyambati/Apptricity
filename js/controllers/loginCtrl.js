angular.module('myApp').controller('loginCtrl', function($scope){

  $scope.userName = "";
  $scope.password = "";

  $scope.login = function(userName, password){
    if((userName === "demo") && (password === "demo")){
      alert('LOGGED IN!!!');
    }
    else {
      alert('LOGIN FAILED');
    }
  };


});
