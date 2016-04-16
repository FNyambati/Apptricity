angular.module('myApp', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');


  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'homeCtrl'
    });
 })
 .directive('navBar', function() {
    return {
        templateUrl: './js/directives/navBar/navBar.html',
        restrict: 'E',
        scope: {
        },
        controller: 'navBarCtrl'
    };
 });
