(function ( angular ) {

    'use strict';

    var mod = angular.module( 'validatecc.directive', [] );

    mod.directive( 'validatecc', function() {
        return {
            templateUrl: 'validatecc-directive.html',
            restrict: 'E',
            scope: {
            },
            controller: function( $scope ) {

                $scope.creditcard = {};

                $scope.submitFn = function() {
                    //TODO
                };
            }
        }
    });

})( angular );