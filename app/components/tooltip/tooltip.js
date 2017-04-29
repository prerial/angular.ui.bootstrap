/**
 * Created by Mikhail on 4/29/2017.
 */

'use strict';
angular.module('myApp.myTooltip',[])
    .component('myTooltip', {
        templateUrl: 'components/tooltip/tooltip.html',
        controller: 'TooltipDemoCtrl'
    })
    .controller('TooltipDemoCtrl', function ($scope, $sce) {
        $scope.dynamicTooltip = 'Hello, World!';
        $scope.dynamicTooltipText = 'dynamic';
        $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
        $scope.placement = {
            options: [
                'top',
                'top-left',
                'top-right',
                'bottom',
                'bottom-left',
                'bottom-right',
                'left',
                'left-top',
                'left-bottom',
                'right',
                'right-top',
                'right-bottom'
            ],
            selected: 'top'
        };
    });