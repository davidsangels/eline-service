import React from 'react';
import pagination from '../helpers/pagination.js'

// max 7 reviews per page
const Pagination = ({
  currentPage,
  numBtns,
  changePage
}) => {
  const buttons = pagination(currentPage, numBtns)
  return (
    <div>
      {currentPage != 1 && (
        <button
          type='button'
          value='before'
          onClick={(e) => changePage(e.target.value)}
        >Before</button>
      )}
      {buttons.map(btn => {
        if (btn === '...'){
          return (
            <span key={btn}>{btn}</span>
          )
        } else {
          return (
            <button
              type='button'
              value={btn}
              key={btn}
              onClick={(e) => changePage(e.target.value)}
            >{btn}</button>
          )
        }
      })}
      {currentPage != numBtns && (
        <button
          type='button'
          value='next'
          onClick={(e) => changePage(e.target.value)}
        >Next</button>
      )}
    </div>
  );
};

export default Pagination;