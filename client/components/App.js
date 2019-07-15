import React from 'react';
import $ from 'jquery';

import Search from './Search';
import Rating from './Rating';
import Attributes from './Attributes';
import Reviews from './Reviews';

const styles = {
  divModule: {
    width: '60%'
  },
  divHeader: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '16px'
  },
  hr: {
    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
    fontSize: '14px',
    lineHeight: '1px',
    color: 'rgb(235, 235, 235)',
    margin: '16px 0 16px 0',
    opacity: '0.2'
  },
  numReviews: {
    display: 'flex',
    flex: '1',
    margin: '0px',
    wordWrap: 'break-word',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.25em',
    color: '#484848',
    paddingTop: '2px',
    paddingBottom: '2px',
  },
  divTextSearch: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  spanTextSearch: {
    margin: '0px',
    wordWrap: 'break-word',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.2857142857142858em',
    color: '#484848',
  },
  buttonAllReviews: {
    margin: '0px',
    wordWrap: 'break-word',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    fontSize: '14px',
    fontWeight: '200',
    lineHeight: '1.28em',
    color: '#008489',
    textDecoration: 'none',
    background: 'transparent',
    border: '0px',
    cursor: 'pointer',
    margin: '0px',
    padding: '0px',
    userSelect: 'auto',
    textAlign: 'left',
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlace: null,
      places: [],
      reviewsByPlace: [],
      ratingsByPlace: [],
      textSearch: '',
      reviewsFound: [],
      showReviewsSearched: false
    };
    this.getReviewsByPlace = this.getReviewsByPlace.bind(this);
    this.getRatingsByPlace = this.getRatingsByPlace.bind(this);
    this.handleSearchReviews = this.handleSearchReviews.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    // logs all idPlaces
    $.ajax({
      type: 'GET',
      url: '/api/places'
    })
      .done(places => {
        const idPlaces = places.reduce((acc, cur) => {
          return acc.concat(cur.idPlace);
        }, []);

        console.log(
          '%c These are the idPlaces created in db: ',
          'color: blue; font-size: 16px',
          idPlaces
        );

        return this.setState({
          currentPlace: idPlaces[0],
          places: idPlaces
        });
      })
      .done(() => {
        this.getReviewsByPlace(this.state.currentPlace);
        this.getRatingsByPlace(this.state.currentPlace);
      });
  }

  getReviewsByPlace(id) {
    $.ajax({
      type: 'GET',
      url: `/api/reviews/${id}`
    })
      .done(data => {
        return this.setState({
          reviewsByPlace: data
        });
      });
  }

  getRatingsByPlace(id) {
    $.ajax({
      type: 'GET',
      url: `/api/ratings/${id}`
    })
      .done(data => {
        return this.setState({
          ratingsByPlace: data.reduce(cur => cur)
        });
      });
  }

  handleChangeInput(e) {
    return this.setState({
      textSearch: e.target.value
    });
  }

  handleSearchReviews(e) {
    e.preventDefault(e);
    const query = this.state.textSearch;

    // ajax request to search query in db reviews model
    if (query !== '') {
      $.ajax({
        type: 'GET',
        url: `/api/reviews/search/${query}`
      })
        .done(data => {
          this.setState(state => {
            return {
              reviewsFound: data,
              showReviewsSearched: !state.showReviewsSearched
            }
          });
        })
    }
  }

  handleBackButton() {
    this.setState(state => {
      return {
        showReviewsSearched: !state.showReviewsSearched,
        textSearch: '',
      };
    });
    this.getReviewsByPlace(this.state.currentPlace);
  }

  render() {
    const {
      currentPlace,
      reviewsByPlace,
      ratingsByPlace,
      textSearch,
      showReviewsSearched,
      reviewsFound
    } = this.state;

    const allReviews = () => (
      <React.Fragment>
        <Attributes rating={ratingsByPlace}/>
        <Reviews reviews={reviewsByPlace} />
      </React.Fragment>
    );

    const reviewsSearched = () => (
      <React.Fragment>
        <div style={styles.divTextSearch}>
          {reviewsFound.length === 0 && (
            <span style={styles.spanTextSearch}>
              None of our guests have mentioned “<strong>{textSearch}</strong>”
            </span>
          )}
          {reviewsFound.length > 0 && (
            <span style={styles.spanTextSearch}>
              {reviewsFound.length} guests have mentioned “<strong>{textSearch}</strong>”
            </span>
          )}
          <button
            onClick={this.handleBackButton}
            style={styles.buttonAllReviews}
          >
            Back to all reviews
          </button>
        </div>
        <hr style={styles.hr}/>
        <Reviews reviews={reviewsFound} />
      </React.Fragment>
    );

    return (
      <div style={styles.divModule}>
        {currentPlace !== 'null' && (
          <div>
            <div style={styles.divHeader}>
              <div style={styles.numReviews}>
                <div>{reviewsByPlace.length} Reviews</div>
                <Rating rating={ratingsByPlace.overall_avg}/>
              </div>
              <Search
                handleSearch={this.handleSearchReviews}
                handleChange={this.handleChangeInput}
                text={textSearch}
              />
            </div>
            <hr style={styles.hr}/>
            {!showReviewsSearched && allReviews()}
            {showReviewsSearched && reviewsSearched()}
          </div>
        )}
      </div>
    );
  }
}

export default App;