/**
 * Created by Mikhail on 4/29/2017.
 */
'use strict';
angular.module('myApp.myPagination',[])
    .component('myPagination', {
        templateUrl: 'components/pagination/pagination.html',
        controller: 'PaginationDemoCtrl'
    })
.controller('PaginationDemoCtrl', function ($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
});
