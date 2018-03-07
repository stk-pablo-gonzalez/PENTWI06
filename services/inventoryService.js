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

function _getAll() {
    return _inventory;
}

function _add(productId, qty) {
    var productData = _findProduct(productId);

    productData.qty += qty;
}

function _remove(productId, qty) {
    var productData = _findProduct(productId);

    if(productData.qty < qty) {
        throw { 
            message:"Not enough existence in inventory.",
            data: {
                productId: productId
            }
        };
    }

    productData.qty -= qty;
}

function _get(productId) {
    var productData = _findProduct(productId);

    return productData;
}

function _hasExistence(productId, qty) {
    var productData = _findProduct(productId);
    
    return (productData.qty >= qty);
}

module.exports = {
    getAll: _getAll,
    remove: _remove,
    get: _get,
    add: _add,
    hasExistence: _hasExistence
};