angular.module('myApp', ['ui.router'])


.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');


  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      // controller: 'homeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/views/about.html'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '/views/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .state('expenses', {
      url: '/expenses',
      templateUrl: '/views/expenses.html',
      // controller: 'expensesCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      // controller: 'loginCtrl'
    });
 })
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
