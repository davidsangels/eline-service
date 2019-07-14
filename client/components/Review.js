import React from 'react';
const moment = require('moment');

const styles = {
  divMain: {
    // marginBottom: '48px'
  },
  user: {
    height: '48px',
    width: '48px',
    display: 'flex',
  },
  userInfo: {
    marginLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
    flex: 'none'
  },
  img: {
    backgroundColor: '#D8D8D8',
    borderRadius: '50%',
    borderWidth: '2px',
    borderColor: '#ffffff'
  },
  userName: {
    margin: '0px',
    wordWrap: 'break-word',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.375em',
    color: '#484848',
  },
  createdAt: {
    margin: '0px',
    wordWrap: 'break-word',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '14px',
    fontWeight: '200',
    lineHeight: '1.28em',
    color: '#484848',
  },
  divText: {
    marginTop: '24px',
    wordWrap: 'break-word',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '16px',
    fontWeight: '200',
    lineHeight: '1.375em',
    color: '#484848',
  },
  hr: {
    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
    fontSize: '14px',
    lineHeight: '1px',
    color: 'rgb(235, 235, 235)',
    margin: '24px 0 24px 0',
    opacity: '0.2'
  },
};

const Review = ({review}) => {
  const createdAt = moment(review.createdAt).format('MMMM YYYY');
  const text = review.text.charAt(0).toUpperCase() + review.text.slice(1);

  return (
    <React.Fragment>
      <div style={styles.divMain}>
        <div style={styles.user}>
          <img
            src={review.avatarUrl}
            height="50"
            width="50"
            style={styles.img}
          />
          <div style={styles.userInfo}>
            <div style={styles.userName}>
              {review.username}
            </div>
            <div style={styles.createdAt}>
              {createdAt}
            </div>
          </div>
        </div>
        <div style={styles.divText}>
          {text}
        </div>
      </div>
      <hr style={styles.hr}/>
    </React.Fragment>
  );
};

export default Review;