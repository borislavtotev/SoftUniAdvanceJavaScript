var models = models || {};

(function (scope) {
    'use strict';

    var Category = (function () {
        function Category(name) {
            this.name = name;
            this._categories = [];
            this._items = [];
        };

        Category.prototype.addCategory = function addCategory(category) {
            this._categories.push(category);
        };

        Category.prototype.getCategories = function getCategories() {
            return this._categories;
        };

        Category.prototype.addItem = function addItem(item) {
            this._items.push(item);
        };

        Category.prototype.getItems = function getItem() {
            return this._items;
        };

        return Category;
    }());

    scope.getCategory = function (name) {
        return new Category(name);
    };

    console.log(scope);
}(models));