var imdb = imdb || {};

(function (scope) {
    'use strict';

    var id = 0;

    function Genre(name) {
        this.name = name;
        this._movies = [];
        id++;
        this._id = id;
    }

    Genre.prototype.addMovie = function addMovie(movie) {
        this._movies.push(movie);
    };

    Genre.prototype.getMovies = function getMovies() {
        return this._movies;
    };

    Genre.prototype.deleteMovie = function deleteMovie(movie) {
        var newMovies = [];
        this._movies.forEach(function (currentMovie) {
            if (currentMovie._id != movie._id) {
                newMovies.push(currentMovie);
            }
        });

        this._movies = newMovies.slice();
    };

    Genre.prototype.deleteMovieById = function deleteMovieById(value) {
        var newMovies = [];
        this._movies.forEach(function (currentMovie) {
            if (currentMovie._id != value) {
                newMovies.push(currentMovie);
            }
        });

        this._movies = newMovies.slice();
    };

    scope.getGenre = function(name) {
        return new Genre(name);
    };
}(imdb));