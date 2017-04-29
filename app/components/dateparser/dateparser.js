/**
 * Created by Mikhail on 4/29/2017.
 */
'use strict';
angular.module('myApp.myDateparser',[])
    .component('myDateparser', {
        templateUrl: 'components/dateparser/dateparser.html',
        controller: 'DateParserDemoCtrl'
    })
    .controller('DateParserDemoCtrl', function ($scope, uibDateParser) {
        $scope.format = 'yyyy/MM/dd';
        $scope.date = new Date();
});