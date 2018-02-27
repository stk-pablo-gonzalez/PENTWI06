'use strict';

angular
    .module('posApp')
    .config(['$locationProvider', '$routeProvider', 
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/pos', {
                    template: '<pos-details></pos-details>'
                })
                .when('/products', {
                    template: '<product-catalog></product-catalog>'
                })
                .otherwise('/pos');
        }]);
