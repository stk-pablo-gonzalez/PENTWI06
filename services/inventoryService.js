// inventoryService.js
// Inventory domain service

var _inventory = [
    { productId: 11, qty: 19 },
    { productId: 12, qty: 150 },
    { productId: 13, qty: 25 }
];

function _findProduct(productId) {
    var product = _inventory.find(function(p) {
        return p.productId == productId
    });

    return product;
}