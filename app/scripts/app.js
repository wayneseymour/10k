'use strict';

angular.module('10kApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/first', {
        templateUrl: 'views/first.html',
        controller: 'FirstcontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });