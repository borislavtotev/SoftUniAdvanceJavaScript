var imdb = imdb || {};

(function (scope) {
    'use strict';

    var id = 0;
    
    function Review(author, content, date) {
        this.author = author;
        this.content = content;
        this.date = date;
        id++;
        this._id = id;
    }

    scope.getReview = function getReview(author, content, date) {
        return new Review(author, content, date);
    };
}(imdb));