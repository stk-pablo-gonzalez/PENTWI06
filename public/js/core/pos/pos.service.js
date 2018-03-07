'use strict';

angular
    .module('core.pos')
    .factory('Sale', ['$resource', ($resource) => {
        return $resource('/api/sales', null, {
            save: {
                method: 'POST'
            }
        });
    }]);