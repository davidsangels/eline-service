import React from 'react';
const moment = require('moment');

import css from '../styles/review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreText: false,
      avatarUrl: null
    };
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad(){
    this.setState(state => {
      return {
        avatarUrl: this.props.review.avatarUrl
      }
    })
  }

  render() {
    const { review } = this.props;
    const { showMoreText, avatarUrl } = this.state;
    const createdAt = moment(review.createdAt).format('MMMM YYYY');
    const text = review.text.charAt(0).toUpperCase() + review.text.slice(1);

    return (
      <React.Fragment>
        <div>
          <div className='user'>
            <img
              src={review.avatarUrl}
              height="50"
              width="50"
              className='img-avatar'
              onLoad={() => this.handleLoad()}
              key={avatarUrl}
            />
            <div className='userInfo'>
              <div className='userName'>
                {review.username}
              </div>
              <div className='createdAt'>
                {createdAt}
              </div>
            </div>
          </div>
          <div className='div-text'>
            {showMoreText && (
              <div>{text}</div>
            )}
            {!showMoreText && (
              <React.Fragment>
                {text.length > 275 && (
                  <div>
                    {text.slice(0, 275)}...
                    <button
                      onClick={() => this.setState(state => {
                        return { showMoreText: !state.showMoreText };
                      })}
                      className='btn-read-more'
                    >Read more</button>
                  </div>
                )}
                {text.length <= 275 && text}
              </React.Fragment>
            )}
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Review;