/**
 * Created by Mikhail on 4/29/2017.
 */
'use strict';
angular.module('myApp.myButtons',[])
    .component('myButtons', {
        templateUrl: 'components/buttons/buttons.html',
        controller: 'ButtonsCtrl'
    })
    .controller('ButtonsCtrl', function ($scope) {
        $scope.singleModel = 1;

        $scope.radioModel = 'Middle';

        $scope.checkModel = {
            left: false,
            middle: true,
            right: false
        };

        $scope.checkResults = [];

        $scope.$watchCollection('checkModel', function () {
            $scope.checkResults = [];
            angular.forEach($scope.checkModel, function (value, key) {
                if (value) {
                    $scope.checkResults.push(key);
                }
            });
        });
    });
