'use strict';

angular
    .module('core.product')
    .factory('Products', ['$resource', ($resource) => {
        return $resource('/api/products', null, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }]);