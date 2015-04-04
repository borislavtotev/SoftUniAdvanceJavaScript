var imdb = imdb || {};

(function (scope) {
    'use strict';

    var id = 0;

    function Actor(name, bio, born) {
        this.name = name;
        this.bio = bio;
        this.born = born;
        id++;
        this._id = id;
    }

    scope.getActor = function getActor(name, bio, born) {
        return new Actor(name, bio, born);
    };
}(imdb));