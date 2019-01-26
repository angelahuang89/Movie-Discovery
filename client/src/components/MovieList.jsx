import React from 'react';

import MovieTitle from './MovieTitle';

const MovieList = props => (
  <div>
    { props.currentSearch ?
      <div id='movie-results'>
         <a href='/'>Back to homepage</a>
        <h3>Movie results for {props.currentSearch}</h3>
      </div> :
      <h3>Popular Movies</h3>
    }
    <div id='movie-list-container'>
      <ol>
        {
          props.movies.map(movie => {
            return (
              <MovieTitle
                key={movie.id}
                id={movie.id}
                title={movie.title}
                getMovieInfo={props.getMovieInfo}
              />
            );
          })
        }
      </ol>
    </div>
  </div>
);

export default MovieList;