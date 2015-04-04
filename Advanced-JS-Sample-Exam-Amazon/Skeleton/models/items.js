var models = models || {};

(function (scope) {
    'use strict';

    var Item = (function () {
        function Item(title, description, price) {
            this.title = title;
            this.description = description;
            this.price = price;
            this._customerReviews = [];
        }

        Item.prototype.addCustomerReview = function addCustomerReview(review) {
            this._customerReviews.push(review);
        };

        Item.prototype.getCustomerReviews = function getCustomerReview() {
            return this._customerReviews;
        };

        return Item;
    }());

    var UsedItem = (function () {
        function UsedItem(title, description, price) {
            Item.call(this, title, description, price);
        }

        UsedItem.prototype = Object.create(Item.prototype);
        UsedItem.prototype.constructor = UsedItem;

        return UsedItem;
    }());


    scope.getItem = function (title, description, price) {
        return new Item(title, description, price)   ;
    };

    scope.getUsedItem = function (title, description, price) {
        return new UsedItem(title, description, price)   ;
    };
}(models));