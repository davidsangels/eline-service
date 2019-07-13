import React from 'react';

const Search = ({handleSearch, handleChange, text}) => {
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        value={text}
        placeholder="Search reviews"
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default Search;