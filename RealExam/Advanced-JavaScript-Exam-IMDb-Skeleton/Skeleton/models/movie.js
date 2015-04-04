var imdb = imdb || {};

(function (scope) {
    'use strict';

    var id = 0;

    function Movie(title, length, rating, country) {
        this.title =title;
        this.length = length;
        this.rating = rating;
        this.country = country;
        this._actors = [];
        this._reviews = [];
        id++;
        this._id = id;
    }

    Movie.prototype.addActor = function addActor(actor) {
        this._actors.push(actor);
    };

    Movie.prototype.getActors = function getActor() {
        return this._actors;
    };

    Movie.prototype.addReview = function addReview(review) {
        this._reviews.push(review);
    };

    Movie.prototype.getReviews = function getReviews() {
        return this._reviews;
    };

    Movie.prototype.deleteReview = function deleteReview(review) {
        var newReviews = [];
        this._reviews.forEach(function (currentReview) {
            if (currentReview._id != review._id) {
                newReviews.push(currentReview);
            }
        });

        this._reviews = newReviews.slice();
    };

    Movie.prototype.deleteReviewById = function deleteReviewById(value) {
        var newReviews = [];
        this._reviews.forEach(function (currentReview) {
            if (currentReview._id != value) {
                newReviews.push(currentReview);
            }
        });

        this._reviews = newReviews.slice();
    };

    scope.getMovie = function(title, length, rating, country) {
        return new Movie(title, length, rating, country);
    };

    scope.Movie = Movie;
}(imdb));