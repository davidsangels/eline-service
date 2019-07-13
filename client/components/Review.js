import React from 'react';

const Review = ({review}) => {
  return (
    <div>
      <div style={styles.user}>
        <img
          src={review.avatarUrl}
          height="50"
          width="50"
          style={styles.img}
        />
        <div style={styles.userInfo}>
          <div>{review.username}</div>
          <div>{review.createdAt}</div>
        </div>
      </div>
      <p>{review.text}</p>
      <hr />
    </div>
  );
};

const styles = {
  user: {
    height: '48px',
    width: '48px',
    display: 'flex',
  },
  userInfo: {
    marginLeft: '16px'
  },
  img: {
    backgroundColor: '#D8D8D8',
    borderRadius: '50%',
    borderWidth: '2px',
    borderColor: '#ffffff'
  }
}

export default Review;