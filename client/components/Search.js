import React from 'react';

const Search = ({handleSearch, handleChange, text}) => {
  return (
    <div style={styles.form}>
      <form onSubmit={(e) => handleSearch(e)}>
        <div style={styles.divInput}>
          <input
            type="text"
            value={text}
            placeholder="Search reviews"
            onChange={(e) => handleChange(e)}
            style={styles.input}
          />
        </div>
    </form>
    </div>

  );
};

const styles = {
  form: {
    width: '50%',
    textAlign: 'end'
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: 'normal',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    textTransform: 'undefined',
    color: '#484848',
    fontWeight: '600',
    paddingLeft: '7px',
    paddingRight: '7px',
    border: 'none',
    borderColor: 'transparent',
  },
  divInput: {
    backgroundColor: '#ffffff',
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: 'normal',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    textTransform: 'undefined',
    color: '#484848',
    paddingTop: 'undefined',
    paddingBottom: 'undefined',
  }
}

export default Search;