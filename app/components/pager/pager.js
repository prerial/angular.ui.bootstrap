/**
 * Created by Mikhail on 4/29/2017.
 */
'use strict';
angular.module('myApp.myPager',[])
    .component('myPager', {
        templateUrl: 'components/pager/pager.html',
        controller: 'PagerDemoCtrl'
    })
.controller('PagerDemoCtrl', function($scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;
});