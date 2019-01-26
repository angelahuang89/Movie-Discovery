import React from 'react';

const SearchBar = props => (
  <input id='search-bar'
    value={props.searchTerm}
    onChange={props.handleChange}
    onKeyPress={(e) => e.key === 'Enter' ? props.handleSearch(e) : null}
  />
);

export default SearchBar;