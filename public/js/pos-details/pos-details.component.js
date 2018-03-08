'use strict';

angular
    .module('posDetails')
    .component('posDetails', {
        templateUrl: 'js/pos-details/pos-details.template.html',
        controller: ['Sale', 'Products', function PosDetailsController(Sale, Products) {
            var self = this;
            self.items = [];
            self.totalAmount = 0.0;

            self.add = () => {
                Products.get({id: self.code}, (product) => {
                    self.items.push({
                        "productId": product.id,
                        "qty": 1,
                        "unitPrice": product.price,
                        "productDesc": product.desc
                    });
                    self.totalAmount += product.price;
                    self.code = '';
                });
            }

            self.confirm = () => {
                var newSale = new Sale();
                newSale.items = self.items;
                newSale.totalAmount = 10;

                newSale.$save((sale) => {
                    self.totalAmount = 0.0;
                    self.items = [];  
                });
            }
        }]
    });