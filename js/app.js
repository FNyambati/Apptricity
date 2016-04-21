angular.module('myApp', ['ui.router', 'ui.grid', 'ui.grid.edit'])////DEPENDINCES

/////UI_ROUTER////
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');


  $stateProvider/////STATES

    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html',
      // controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/templates/about.html'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '/templates/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .state('expenses', {
      url: '/expenses',
      templateUrl: '/templates/expenses.html',
      controller: 'dashboardCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'loginCtrl'
    });
 })

 ////DIRECTIVES////
 .directive('navBar', function() {
    return {
        templateUrl: './js/directives/navBar.html',
        restrict: 'E',
        scope: {
        }
    };
  })
 .directive('sideBar', function() {
    return {
        templateUrl: './js/directives/sideBar/sideBar.html',
        restrict: 'E',
        scope: {
        },
        controller: 'sideBarCtrl'
    };
 });
