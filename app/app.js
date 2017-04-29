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
    'myApp.myPager',
    'myApp.myPagination',
    'myApp.myPopover',
    'myApp.myPosition',
    'myApp.myProgress',
    'myApp.myRating',
    'myApp.myTabs',
    'myApp.myTimepicker',
    'myApp.myTooltip',
    'myApp.myTypeahead'

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
  when('/pagination', {
    template: '<my-pagination></my-pagination>'
  }).
  when('/popover', {
    template: '<my-popover></my-popover>'
  }).
  when('/position', {
    template: '<my-position></my-position>'
  }).
  when('/progressbar', {
    template: '<my-progress></my-progress>'
  }).
  when('/rating', {
    template: '<my-rating></my-rating>'
  }).
  when('/tabs', {
    template: '<my-tabs></my-tabs>'
  }).
  when('/timepicker', {
    template: '<my-timepicker></my-timepicker>'
  }).
  when('/tooltip', {
    template: '<my-tooltip></my-tooltip>'
  }).
  when('/typeahead', {
    template: '<my-typeahead></my-typeahead>'
  }).

  otherwise({redirectTo: '/accordion'});
}])
.controller('MainCtrl', MainCtrl);
function MainCtrl($scope, $http, $document, $uibModal, orderByFilter) {
  // Grab old version docs
  $http.get('/versions-mapping.json')
      .then(function(result) {
        $scope.oldDocs = result.data;
      });

  $scope.showBuildModal = function() {
    var modalInstance = $uibModal.open({
      templateUrl: 'buildModal.html',
      controller: 'SelectModulesCtrl',
      resolve: {
        modules: function(buildFilesService) {
          return buildFilesService.getModuleMap()
              .then(function (moduleMap) {
                return Object.keys(moduleMap);
              });
        }
      }
    });
  };

  $scope.showDownloadModal = function() {
    var modalInstance = $uibModal.open({
      templateUrl: 'downloadModal.html',
      controller: 'DownloadCtrl'
    });
  };
}
