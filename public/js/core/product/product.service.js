'use strict';

angular
    .module('core.product')
    .factory('Products', ['$resource', ($resource) => {
        return $resource('/api/products/:id', {id: '@id'}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }]);