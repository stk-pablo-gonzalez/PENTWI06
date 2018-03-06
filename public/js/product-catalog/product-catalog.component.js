'use strict';

angular
    .module('productCatalog')
    .component('productCatalog', {
        templateUrl: 'js/product-catalog/product-catalog.template.html',
        controller: ['$http', '$log', '$location', function ProductCatalogController($http, $log, $location) {
            var self = this;
            $log.debug('$location.path: ' + $location.path());

            $http.get('/api/products').then(result => {
                $log.debug(result);
                self.products = result.data;
            });
        }]
    });