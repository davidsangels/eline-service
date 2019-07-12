import React from 'react';
import pagination from '../helpers/pagination.js'

// max 7 reviews per page
const Pagination = ({
  currentPage,
  numBtns,
}) => {
  const buttons = pagination(currentPage, numBtns)
  return (
    <div>
      {buttons.map(btn => (
        <button
          type='button'
          value={btn}
          key={btn}
          // onClick={(e) => changePage(e.target.value)}
        >{btn}</button>
      ))}
      <button
        type='button'
        value='next'
        // onClick={(e) => changePage(e.target.value)}
      >Next</button>
    </div>
  );
};

export default Pagination;