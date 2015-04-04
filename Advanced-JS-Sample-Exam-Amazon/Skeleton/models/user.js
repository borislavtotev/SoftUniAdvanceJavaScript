var models = models || {};

(function (scope) {
    'use strict';

    var shoppingCart;

    var User = (function () {
        function User(username, fullName, balance, shoppingCart) {
            this.username = username;
            this.fullName = fullName;
            this._balance = balance;
            this._shoppingCart = shoppingCart;
        }

        User.prototype.addItemToCart = function(item) {
            this._shoppingCart = item;
        };

        return User;
    }());

    scope.getUser = function (username, fullName, balance) {
        return new User(username, fullName, balance);
    }
}(models));