import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { searchTerm, handleChange, handleSearch } = props;
  return (
    <input
      id="search-bar"
      value={searchTerm}
      onChange={handleChange}
      onKeyPress={e => (e.key === 'Enter' ? handleSearch() : null)}
    />
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
