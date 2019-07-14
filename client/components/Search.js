import React from 'react';

const Search = ({handleSearch, handleChange, text}) => {
  return (
    <div style={styles.form}>
      <form onSubmit={(e) => handleSearch(e)}>
        <div style={styles.divInput}>
          {/* <ion-icon name="search" style={styles.icon}></ion-icon> */}
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
    width: '33%',
  },
  icon: {
    fontSize: '20px',
    verticalAlign: 'middle',
    fontWeight: '200',
    lineHeight: '22px',
    letterSpacing: 'normal',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    textTransform: 'undefined',
    color: '#484848',
    visibility: 'visible',
    height: '34px'
  },
  divInput: {
    display: 'contents',
    backgroundColor: '#ffffff',
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: 'normal',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    textTransform: 'undefined',
    color: '#484848',
    paddingTop: 'undefined',
    paddingBottom: 'undefined',
    marginBottom: '8px',
    width: '100%',
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
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(235, 235, 235)',
    borderRadius: '4px',
  },

}

export default Search;