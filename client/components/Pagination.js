import React from 'react';

import pagination from '../helpers/pagination.js';
import css from '../styles/pagination.css';

// max 7 reviews per page
const Pagination = ({
  currentPage,
  numBtns,
  changePage
}) => {
  const buttons = pagination(currentPage, numBtns);

  return (
    <div className='main-pagination'>
      {currentPage !== 1 && (
        <button
          type='button'
          name='arrow-back'
          onClick={(e) => changePage(e.target.name)}
          className='btnBackAndGo'
        >
          <ion-icon name="arrow-back"></ion-icon>
        </button>
      )}
      {buttons.map(btn => {
        if (btn === '...') {
          return (
            <span key={btn}>{btn}</span>
          );
        } else {
          return (
            <button
              type='button'
              value={btn}
              key={btn}
              className={btn === currentPage ? 'activeBtn' : 'btnDefault'}
              onClick={(e) => changePage(e.target.value)}
            >{btn}</button>
          );
        }
      })}
      {currentPage !== numBtns && (
        <button
          type='button'
          onClick={(e) => changePage(e.target.name)}
          className='btnBackAndGo'
          name='arrow-forward'
        >
          <ion-icon name="arrow-forward"></ion-icon>
        </button>
      )}
    </div>
  );
};

export default Pagination;