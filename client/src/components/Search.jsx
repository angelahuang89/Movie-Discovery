import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSearch() {
    const { searchMovies } = this.props;
    const { searchTerm } = this.state;
    searchMovies(searchTerm);
    this.setState({
      searchTerm: '',
    });
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <SearchBar
          searchTerm={searchTerm}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <SearchButton
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Search;
