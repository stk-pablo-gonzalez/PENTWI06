'use strict';

angular
    .module('posDetails')
    .component('posDetails', {
        templateUrl: 'js/pos-details/pos-details.template.html',
        controller: ['Sale', function PosDetailsController(Sale) {
            var self = this;

            self.confirm = () => {
                var newSale = new Sale();
                newSale.items = [
                    { "productId": 12, "qty": 10, "unitPrice": 12.2 },
                    { "productId": 13, "qty": 12, "unitPrice": 13.4 }
                ];
                newSale.totalAmount = 10;

                newSale.$save();
            }
        }]
    });