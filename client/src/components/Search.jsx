import React from 'react';

import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSearch(e) {
    this.props.searchMovies(this.state.searchTerm);
    this.setState({
      searchTerm: ''
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <SearchButton
          handleSearch={this.handleSearch}
        />
      </div>
    )
  }
}

export default Search;
