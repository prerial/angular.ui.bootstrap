/**
 * Created by Mikhail on 4/29/2017.
 */
'use strict';
angular.module('myApp.myTabs',[])
    .component('myTabs', {
        templateUrl: 'components/tabs/tabs.html',
        controller: 'TabsDemoCtrl'
    })

.controller('TabsDemoCtrl', function ($scope, $window) {
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };

    $scope.model = {
        name: 'Tabs'
    };
});