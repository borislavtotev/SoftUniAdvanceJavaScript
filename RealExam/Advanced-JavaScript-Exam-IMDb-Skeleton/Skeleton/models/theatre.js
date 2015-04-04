var imdb = imdb || {};

(function (scope) {
    'use strict';

    var id = 0;
    
    function Theatre(name, length, rating, country, isPuppet) {
        scope.Movie.call(this, name, length, rating, country);
        this.isPuppet = isPuppet;
        id++;
        this._id = id;
    }

    Theatre.inherits(scope.Movie);

    scope.getTheatre = function getTheatre(name, length, rating, country) {
        return new Theatre(name, length, rating, country)
    };
}(imdb));