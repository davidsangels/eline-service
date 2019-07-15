import React from 'react';

import css from '../styles/search.css';

const Search = ({handleSearch, handleChange, text}) => {
  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <div className='div-input'>
          <ion-icon name="search" className='icon-search'></ion-icon>
          <input
            type='text'
            value={text}
            placeholder='Search reviews'
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;