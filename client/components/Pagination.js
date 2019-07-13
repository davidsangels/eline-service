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
          style={styles.btnBackAndGo}
        >
          <ion-icon name="arrow-dropleft"></ion-icon>
        </button>
      )}
      {buttons.map(btn => {
        if (btn === '...'){
          return (
            <span key={btn} style={styles.dots}>{btn}</span>
          )
        } else {
          return (
            <button
              type='button'
              value={btn}
              key={btn}
              style={btn == currentPage ? styles.activeBtn : null}
              onClick={(e) => changePage(e.target.value)}
              style={styles.btnDefault}
            >{btn}</button>
          )
        }
      })}
      {currentPage != numBtns && (
        <button
          type='button'
          value='next'
          onClick={(e) => changePage(e.target.value)}
          style={styles.btnBackAndGo}
        >
          <ion-icon name="arrow-dropright"></ion-icon>
        </button>
      )}
    </div>
  );
};

const styles = {
  activeBtn: {
    backgroundColor: '#008489'
  },
  btnDefault: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: 'rgb(0, 132, 137)',
    borderWidth: 'initial',
    borderStyle: 'none',
    borderColor: 'initial',
    borderImage: 'initial',
    textDecoration: 'none',
    margin: '0 8px 0 8px',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '16px',
    fontWeight: '200',
  },
  dots: {
    verticalAlign: 'super'
  },
  btnBackAndGo: {
    backgroundColor: 'transparent',
    boxShadow: 'rgb(0, 132, 137) 0px 0px 0px 1px inset',
    color: 'rgb(0, 132, 137)',
    height: '32px',
    width: '32px',
    borderRadius: '50%',
  }
}

export default Pagination;