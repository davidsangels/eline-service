import React from 'react';

import Review from './Review';
import Pagination from './Pagination';
import css from '../styles/reviews.css'

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeBtn: 1,
      currentPage: 1,
      reviewsStart: 0,
      reviewsEnd: 7,
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangePage(value) {
    if (value === 'arrow-forward') {
      this.setState(state => {
        return {
          currentPage: state.currentPage + 1,
          reviewsStart: state.reviewsStart + 7,
          reviewsEnd: state.reviewsEnd + 7
        };
      });
    } else if (value === 'arrow-back') {
      this.setState(state => {
        return {
          currentPage: state.currentPage - 1,
          reviewsStart: state.reviewsStart - 7,
          reviewsEnd: state.reviewsEnd - 7
        };
      });
    } else {
      const newCurrentPage = Number(value);
      const end = value * 7;
      const start = end - 7;
      this.setState(state => {
        return {
          currentPage: newCurrentPage,
          reviewsStart: start,
          reviewsEnd: end
        };
      });
    }
  }

  render() {
    const { reviews } = this.props;
    const { currentPage, reviewsStart, reviewsEnd } = this.state;
    const numBtns = Math.ceil(reviews.length / 7);

    return (
      <React.Fragment>
        <div className='main-reviews'>
          {reviews.slice(reviewsStart, reviewsEnd).map(review => (
            <Review review={review} key={review.id} />
          ))}
        </div>
        {reviews.length > 7 && (
          <Pagination
            currentPage={currentPage}
            numBtns={numBtns}
            changePage={this.handleChangePage}
          />
        )}
      </React.Fragment>
    );
  }
};

export default Reviews;