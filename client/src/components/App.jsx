import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import Search from './Search';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      movie: null,
      currentSearch: ''
    }

    this.searchMovies = this.searchMovies.bind(this);
    this.getMovieInfo = this.getMovieInfo.bind(this);
  }

  componentDidMount() {
    this.searchMovies();
  }

  searchMovies(searchTerm) {
    axios.get('/search', {
      params: {
        term: searchTerm
      }
    })
    .then(res => {
      this.setState({
        movies: res.data,
        currentSearch: searchTerm
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  getMovieInfo(id) {
    axios.get(`/info/${id}`)
    .then(res => {
      this.setState({
        movie: res.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div id='app'>
          <h1>Movie Discovery</h1>
          <h2>Search and explore movies!</h2>
          <Route exact={true} path='/' render={() => (
            <div>
              <Search searchMovies={this.searchMovies} />
              <MovieList
                currentSearch={this.state.currentSearch}
                movies={this.state.movies}
                getMovieInfo={this.getMovieInfo}
              />
            </div>
          )} />
          <Route path='/info/:id' render={({ match }) => (
            <MovieInfo
              currentSearch={this.state.currentSearch}
              id={match.params.id}
              info={this.state.movie}
            />
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(App);
