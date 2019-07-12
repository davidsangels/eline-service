import React from 'react';

// max 7 reviews per page
// TODO: make button to pass for next page
const Pagination = ({numBtns, activeBtn, changePage}) => {
  var buttons = [];
  for (var i = 1; i <= numBtns; i++) {
    buttons.push(
      <button
        type='button'
        value={i}
        key={i}
        onClick={(e) => changePage(e.target.value, 'page')}
      >{i}</button>
    );
  }

  return (
    <div>
      {buttons}
      <button
        type='button'
        value='next'
        onClick={(e) => changePage(e.target.value, 'next')}
      >Next</button>
    </div>
  );
};

export default Pagination;