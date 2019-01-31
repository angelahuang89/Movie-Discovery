import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = (props) => {
  const { currentSearch, info } = props;
  return (
    <div>
      { currentSearch
        ? (
          <a href="/">
            Back to results for
            {currentSearch}
          </a>
        )
        : <a href="/">Back to homepage</a>
      }
      {
        info
        && (
        <div>
          <h3>{info.title}</h3>
          <h4>{info.tagline}</h4>
          <img className="poster" alt={info.title} src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} />
          <div>
            <a href={info.homepage}>
              {`${info.title}
              's Homepage`}
            </a>
          </div>
          <div>
            <a href={`https://www.imdb.com/title/${info.imdb_id}`}>
              IMDB
            </a>
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <b>Original Title:</b> {info.original_title}
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <b>Overview:</b> {info.overview}
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <b>Popularity:</b> {info.popularity}
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <b>Release Date:</b> {info.release_date}
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <b>Revenue:</b> ${info.revenue}
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <b>Status:</b> {info.status}
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <b>Vote Average:</b> {info.vote_average}
          </div>
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <b>Vote Count:</b> {info.vote_count}
          </div>
        </div>
        )}
    </div>
  );
};

MovieInfo.defaultProps = {
  info: null,
};

MovieInfo.propTypes = {
  currentSearch: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object,
};

export default MovieInfo;
