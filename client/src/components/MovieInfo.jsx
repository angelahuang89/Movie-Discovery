import React from 'react';

const MovieInfo = props => (
  <div>
    { props.currentSearch ?
      <a href='/'>Back to results for {props.currentSearch}</a> :
      <a href='/'>Back to homepage</a>
    }
    {
      props.info &&
      <div>
        <h3>{props.info.title}</h3>
        <h4>{props.info.tagline}</h4>
        <img className='poster' src={`https://image.tmdb.org/t/p/w500/${props.info.poster_path}`} />
          <div><a href={props.info.homepage}>{props.info.title}'s Homepage</a></div>
          <div><a href={`https://www.imdb.com/title/${props.info.imdb_id}`}>IMDB</a></div>
          <div><b>Original Title:</b> {props.info.original_title}</div>
          <div><b>Overview:</b> {props.info.overview}</div>
          <div><b>Popularity:</b> {props.info.popularity}</div>
          <div><b>Release Date:</b> {props.info.release_date}</div>
          <div><b>Revenue:</b> ${props.info.revenue}</div>
          <div><b>Status:</b> {props.info.status}</div>
          <div><b>Vote Average:</b> {props.info.vote_average}</div>
          <div><b>Vote Count:</b> {props.info.vote_count}</div>
      </div>
    }
  </div>
);

export default MovieInfo;