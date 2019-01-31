import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import Search from './Search';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movie: null,
      currentSearch: '',
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.getMovieInfo = this.getMovieInfo.bind(this);
  }

  componentDidMount() {
    this.searchMovies();
  }

  getMovieInfo(id) {
    axios.get(`/info/${id}`)
      .then((res) => {
        this.setState({
          movie: res.data,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  searchMovies(searchTerm = '') {
    axios.get('/search', {
      params: {
        term: searchTerm,
      },
    })
      .then((res) => {
        this.setState({
          movies: res.data,
          currentSearch: searchTerm,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    const { currentSearch, movies, movie } = this.state;
    return (
      <BrowserRouter>
        <div id="app">
          <h1>Movie Discovery</h1>
          <h2>Search and explore movies!</h2>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Search searchMovies={this.searchMovies} />
                <MovieList
                  currentSearch={currentSearch}
                  movies={movies}
                  getMovieInfo={this.getMovieInfo}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/info/:id"
            render={() => (
              <MovieInfo
                currentSearch={currentSearch}
                info={movie}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(App);
