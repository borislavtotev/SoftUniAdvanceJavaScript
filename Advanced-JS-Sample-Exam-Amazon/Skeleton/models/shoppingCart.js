var models = models || {};

(function (scope) {
    'use strict';
    
    var ShoppingCart = (function() {
        function ShoppingCart() {
            this._items = [];
        }

        ShoppingCart.prototype.addItem = function (item) {
            this._items.push(item);
        };

        ShoppingCart.prototype.getTotalPrice = function () {
            var items = this._items;
            var totalPrice = 0;

            items.forEach(
                function (item) {
                    totalPrice+= item.price;
                }
            );
        };

        return ShoppingCart;
    }());

    scope.getShoppingCart = function () {
        return new ShoppingCart();
    }

}(models));