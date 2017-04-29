'use strict';

// Declare app level module which depends on views, and components

angular.module('ui.bootstrap.demo', []);
  angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'ui.bootstrap.demo',
  'myApp.myAccordion',
  'myApp.myAlert',
  'myApp.myButtons',
  'myApp.myCarousel',
  'myApp.myCollapse',
  'myApp.myDateparser',
  'myApp.myDatepicker',
  'myApp.myDatepickerPopup',
  'myApp.myDropdown',
    'myApp.myModal',
    'myApp.myPager'
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
  when('/buttons', {
    template: '<my-buttons></my-buttons>'
  }).
  when('/carousel', {
    template: '<my-carousel></my-carousel>'
  }).
  when('/collapse', {
    template: '<my-collapse></my-collapse>'
  }).
  when('/dateparser', {
    template: '<my-dateparser></my-dateparser>'
  }).
  when('/datepickerPopup', {
    template: '<my-datepicker-popup></my-datepicker-popup>'
  }).
  when('/dropdown', {
    template: '<my-dropdown></my-dropdown>'
  }).
  when('/modal', {
    template: '<my-modal></my-modal>'
  }).
  when('/pager', {
    template: '<my-pager></my-pager>'
  }).

  otherwise({redirectTo: '/accordion'});
}]);
