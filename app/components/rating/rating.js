/**
 * Created by Mikhail on 4/29/2017.
 */
'use strict';
angular.module('myApp.myRating',[])
    .component('myRating', {
        templateUrl: 'components/rating/rating.html',
        controller: 'RatingDemoCtrl'
    })
.controller('RatingDemoCtrl', function ($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart'},
        {stateOff: 'glyphicon-off'}
    ];
});