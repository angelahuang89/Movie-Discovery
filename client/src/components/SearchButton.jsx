import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = (props) => {
  const { handleSearch } = props;
  return (
    <button type="submit" onClick={handleSearch}>
      Search
    </button>
  );
};

SearchButton.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchButton;
