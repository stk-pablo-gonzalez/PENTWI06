'use strict';

angular
    .module('productCatalog')
    .component('productCatalog', {
        templateUrl: 'js/product-catalog/product-catalog.template.html',
        controller: ['$http', '$log', function ProductCatalogController($http, $log) {
            var self = this;

            $http.get('/api/products').then(result => {
                $log.debug(result);
                self.products = result.data;
            });
        }]
    });