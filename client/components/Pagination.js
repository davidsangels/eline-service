import React from 'react';
import pagination from '../helpers/pagination.js'

// max 7 reviews per page
const Pagination = ({
  currentPage,
  numBtns,
}) => {
  return (
    <div>
      {pagination(currentPage, numBtns)}
      <button
        type='button'
        value='next'
        onClick={(e) => changePage(e.target.value)}
      >Next</button>
    </div>
  );
};

export default Pagination;