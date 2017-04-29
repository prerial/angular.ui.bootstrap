/**
 * Created by Mikhail on 4/29/2017.
 */
'use strict';
angular.module('myApp.myCollapse',[])
    .component('myCollapse', {
        templateUrl: 'components/collapse/collapse.html',
        controller: 'CollapseDemoCtrl'
    })
    .controller('CollapseDemoCtrl', function ($scope) {
        $scope.isNavCollapsed = true;
        $scope.isCollapsed = false;
        $scope.isCollapsedHorizontal = false;
    });