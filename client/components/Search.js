import React from 'react';

const Search = ({handleSearch, handleChange, text}) => {
  return (
    <div style={styles.form}>
      <form onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        value={text}
        placeholder="Search reviews"
        onChange={(e) => handleChange(e)}

      />
    </form>
    </div>

  );
};

const styles = {
  form: {
    width: '50%',
    textAlign: 'end'
  }
}

export default Search;