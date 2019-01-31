import React from 'react';
import PropTypes from 'prop-types';

import MovieTitle from './MovieTitle';

const MovieList = (props) => {
  const { currentSearch, movies, getMovieInfo } = props;
  return (
    <div>
      { currentSearch
        ? (
          <div id="movie-results">
            <a href="/">Back to homepage</a>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <h3>Movie results for {currentSearch}</h3>
          </div>
        )
        : <h3>Popular Movies</h3>
      }
      <div id="movie-list-container">
        <ol>
          {
            movies.map(movie => (
              <MovieTitle
                key={movie.id}
                id={movie.id}
                title={movie.title}
                getMovieInfo={getMovieInfo}
              />
            ))
          }
        </ol>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  currentSearch: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMovieInfo: PropTypes.func.isRequired,
};

export default MovieList;
