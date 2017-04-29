'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.bootstrap',
  'ngRoute',
  'myApp.view1',
  'myApp.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.
  when('/accordion', {
    template: '<my-accordion></my-accordion>'
  }).
  when('/alert', {
    template: '<my-alert></my-alert>'
  }).
  otherwise({redirectTo: '/accordion'});
}]);
