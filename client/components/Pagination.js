import React from 'react';

// max 7 reviews per page

const Pagination = ({numBtn, activeBtn}) => {
  var buttons=[];
  for(var i = 1; i <= numBtn; i++){
    buttons.push(
      <button value={i} key={i}>
        {i}
      </button>
    )
  }

  return (
    <div>
      {buttons}
    </div>
  )
};

export default Pagination;