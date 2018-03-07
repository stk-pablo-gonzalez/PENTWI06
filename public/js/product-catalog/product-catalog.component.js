'use strict';

angular
    .module('productCatalog')
    .component('productCatalog', {
        templateUrl: 'js/product-catalog/product-catalog.template.html',
        controller: ['Products', function ProductCatalogController(Products) {
            var self = this;

            var products = Products.query(() => {
                self.products = products;
            });
        }]
    });