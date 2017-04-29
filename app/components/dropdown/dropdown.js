/**
 * Created by Mikhail on 4/29/2017.
 */
'use strict';
angular.module('myApp.myDropdown',[])
    .component('myDropdown', {
        templateUrl: 'components/dropdown/dropdown.html',
        controller: 'DropdownCtrl'
    })
    .controller('DropdownCtrl', function ($scope, $log) {
    $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});
