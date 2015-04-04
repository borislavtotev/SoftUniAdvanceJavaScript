var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);
			}
		});

        moviesContainer.addEventListener('click', function (ev) {
            var parrentElement = ev.target.parentNode;
            if (ev.target.tagName === 'LI') {
                eventListener(ev.target);
            } else if (parrentElement.tagName === 'LI' && ev.target.tagName !== 'INPUT') {
                eventListener(parrentElement);
            }

            function eventListener(element) {
                var movieId,
                    movie,
                    detailsHtml,
                    actorsHtml,
                    reviewsHtml,
                    allMovies = [];

                movieId = parseInt(element.getAttribute('data-id'));

                data.forEach(function (genre) {
                    var genreMovies = genre.getMovies();
                    genreMovies.forEach(function (movie) {
                        allMovies.push(movie);
                    })
                });

                movie = allMovies.filter(function (movie) {
                    return movie._id === movieId;
                })[0];

                actorsHtml = loadActors(movie.getActors());
                detailsContainer.innerHTML = actorsHtml.outerHTML;

                reviewsHtml = loadReviews(movie.getReviews());
                detailsContainer.appendChild(reviewsHtml);

                detailsContainer.setAttribute('data-movie-id', movieId);
            }
        });

        moviesContainer.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'INPUT') {
                var movieLi = ev.target.parentNode,
                    movieId = movieLi.getAttribute('data-id'),
                    genreDiv = document.getElementById('movies'),
                    genreId = genreDiv.getAttribute('data-genre-id'),
                    genre = data.filter(function (genre) { return genre._id == genreId})[0],
                    details = document.getElementById('details');

                genre.deleteMovieById(movieId);

                movieLi.remove();

                // delete details if they are for the same movie
                if (details.getAttribute('data-movie-id') == movieId) {
                    details.innerHTML = '';
                }
            }
        });
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
            liMovie.innerHTML += '<input type="button" value="Delete Movie" >';
			
			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

    function loadActors(actors) {
        var actorsContainer,
            actorsHeader,
            actorsUl;

        actorsContainer = document.createElement('div');

        actorsHeader = document.createElement('h2');
        actorsHeader.innerHTML = 'Actors';
        actorsContainer.appendChild(actorsHeader);

        actorsUl = document.createElement('ul');
        actors.forEach(function (actor) {
            var liActor = document.createElement('li');
            liActor.setAttribute('data-id', actor._id);

            liActor.innerHTML = '<h3>' + actor.name + '</h3>';
            liActor.innerHTML += '<div>Bio:' + actor.bio + '</div>';
            liActor.innerHTML += '<div>Born:' + actor.born + '</div>';

            actorsUl.appendChild(liActor);
        });

        actorsContainer.appendChild(actorsUl);

        return actorsContainer;
    }

    function loadReviews(reviews) {
        var reviewsContainer,
            reviewsHeader,
            reviewUl;

        reviewsContainer = document.createElement('div');

        reviewsHeader = document.createElement('h2');
        reviewsHeader.innerHTML = 'Reviews';
        reviewsContainer.appendChild(reviewsHeader);

        reviewUl = document.createElement('ul');
        reviews.forEach(function (review) {
            var liReview = document.createElement('li');
            liReview.setAttribute('data-id', review._id);

            liReview.innerHTML = '<h3>' + review.author + '</h3>';
            liReview.innerHTML += '<div>Content:' + review.content + '</div>';
            liReview.innerHTML += '<div>Date:' + review.date + '</div>';

            reviewUl.appendChild(liReview);
        });

        reviewsContainer.appendChild(reviewUl);

        return reviewsContainer;
    }

	scope.loadHtml = loadHtml;
}(imdb));