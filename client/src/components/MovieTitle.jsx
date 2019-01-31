import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieTitle = (props) => {
  const { getMovieInfo, id, title } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      onClick={() => getMovieInfo(id)}
      onKeyPress={e => (e.key === 'Enter' ? getMovieInfo(id) : null)}
    >
      <Link to={`/info/${id}`}>
        {title}
      </Link>
    </li>
  );
};

MovieTitle.propTypes = {
  getMovieInfo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieTitle;
