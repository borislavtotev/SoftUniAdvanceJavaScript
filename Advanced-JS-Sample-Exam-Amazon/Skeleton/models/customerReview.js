var models = models || {};

(function (scope) {
    'use strict';

    function CustomerReview(customer, content, rating, createdOn) {
        this._customer = customer;
        this._content = content;
        this._rating = rating;
        this._createdOn = createdOn;
    }

    models.getCustomerReview = function getCustomerReview(customer, content, rating, createdOn) {
        return new CustomerReview(customer, content, rating, createdOn);
    };
}(models));