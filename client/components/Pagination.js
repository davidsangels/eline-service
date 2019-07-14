import React from 'react';
import pagination from '../helpers/pagination.js';

const styles = {
  divMain: {
    display: 'flex',
    alignItems: 'center'
  },
  activeBtn: {
    display: 'inline-block',
    width: '32px',
    height: '32px',
    backgroundColor: 'rgb(0, 132, 137)',
    color: 'rgb(255, 255, 255)',
    borderRadius: '16px',
    margin: '0 8px 0 8px',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '16px',
    fontWeight: '200',
  },
  btnDefault: {
    display: 'inline-block',
    width: '32px',
    height: '32px',
    backgroundColor: 'transparent',
    color: 'rgb(0, 132, 137)',
    borderStyle: 'none',
    textDecoration: 'none',
    margin: '0 8px 0 8px',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '16px',
    fontWeight: '200',
  },
  btnBackAndGo: {
    borderRadius: '50%',
    backgroundColor: 'transparent',
    color: 'rgb(0, 132, 137)',
    boxShadow: 'rgb(0, 132, 137) 0px 0px 0px 1px inset',
    color: 'rgb(0, 132, 137)',
    height: '32px',
    width: '32px',
    textDecoration: 'none',
    margin: '0 8px 0 8px',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '14px',
    fontWeight: '200',
  }
};

// max 7 reviews per page
const Pagination = ({
  currentPage,
  numBtns,
  changePage
}) => {
  const buttons = pagination(currentPage, numBtns);

  return (
    <div style={styles.divMain}>
      {currentPage !== 1 && (
        <button
          type='button'
          value='before'
          onClick={(e) => changePage(e.target.name)}
          style={styles.btnBackAndGo}
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
              style={btn === currentPage ? styles.activeBtn : styles.btnDefault}
              onClick={(e) => changePage(e.target.value)}
            >{btn}</button>
          );
        }
      })}
      {currentPage !== numBtns && (
        <button
          type='button'
          onClick={(e) => changePage(e.target.name)}
          style={styles.btnBackAndGo}
        >
          <ion-icon name="arrow-forward"></ion-icon>
        </button>
      )}
    </div>
  );
};

export default Pagination;