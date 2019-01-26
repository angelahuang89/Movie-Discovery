import React from 'react';
import { Link } from 'react-router-dom';

const MovieTitle = props => (
  <li onClick={() => props.getMovieInfo(props.id)}>
    <Link to={`/info/${props.id}`}>
      {props.title}
    </Link>
  </li>
);

export default MovieTitle;