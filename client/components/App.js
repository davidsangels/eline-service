import React from 'react';
import $ from 'jquery';

import Search from './Search';
import Rating from './Rating';
import Attributes from './Attributes';
import Reviews from './Reviews';
import Pagination from './Pagination';

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
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: 1,
      currentPlace: null,
      places: [],
      reviewsByPlace: [],
      ratingsByPlace: [],
      currentPage: 1,
      reviewsStart: 0,
      reviewsEnd: 7,
      textSearch: '',
      showReviewsSearched: false
    };
    this.getReviewsByPlace = this.getReviewsByPlace.bind(this);
    this.getRatingsByPlace = this.getRatingsByPlace.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
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

  handleChangePage(value) {
    const {
      currentPage,
      reviewsStart,
      reviewsEnd
    } = this.state;

    console.log('value: ', value)
    console.log('currentPage: ', currentPage)

    let newCurrentPage,
      start,
      end;

    if (value === 'arrow-forward') {
      newCurrentPage = currentPage + 1;
      start = reviewsStart + 7;
      end = reviewsEnd + 7;
    } else if (value === 'arrow-back') {
      newCurrentPage = currentPage - 1;
      start = reviewsStart - 7;
      end = reviewsEnd - 7;
    } else {
      newCurrentPage = value;
      end = value * 7;
      start = end - 7;
    }

    return this.setState({
      currentPage: newCurrentPage,
      reviewsStart: start,
      reviewsEnd: end
    })
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
          this.setState({
            reviewsByPlace: data
          });
        })
        .done(() => {
          if (this.state.reviewsByPlace.length === 0) {
            this.setState(state => {
              return {
                showReviewsSearched: !state.showReviewsSearched
              };
            });
          }
        });
    } else {
      this.getReviewsByPlace(this.state.currentPlace);
      this.setState(state => {
        return {
          showReviewsSearched: !state.showReviewsSearched
        };
      });
    }
  }

  handleBackButton() {
    this.setState(state => {
      return {showReviewsSearched: !state.showReviewsSearched};
    });
    this.getReviewsByPlace(this.state.currentPlace);
  }

  render() {
    const {
      currentPlace,
      reviewsByPlace,
      ratingsByPlace,
      currentPage,
      reviewsStart,
      reviewsEnd,
      textSearch,
      showReviewsSearched
    } = this.state;

    const numBtns = Math.ceil(reviewsByPlace.length / 7);

    const reviewsDefault = () => (
      <div>
        <Attributes rating={ratingsByPlace}/>
        <Reviews
          reviews={reviewsByPlace.slice(reviewsStart, reviewsEnd)}
        />
        <Pagination
          currentPage={currentPage}
          numBtns={numBtns}
          changePage={this.handleChangePage}
        />
      </div>
    );

    const reviewsSearched = () => (
      <div>
        <div>
          None of our guests have mentioned “<strong>{textSearch}</strong>”
        </div>
        <button onClick={this.handleBackButton}>
          Back to all reviews
        </button>
      </div>
    );

    return (
      <div style={styles.divModule}>
        {currentPlace !== 'null' && (
          <div>
            <div style={styles.divHeader}>
              <div style={styles.numReviews}>
                <div>
                  {reviewsByPlace.length} Reviews
                </div>
                <Rating rating={ratingsByPlace.overall_avg}/>
              </div>
              <Search
                handleSearch={this.handleSearchReviews}
                handleChange={this.handleChangeInput}
                text={textSearch}
              />
            </div>
            <hr style={styles.hr}/>
            {!showReviewsSearched && reviewsDefault()}
            {showReviewsSearched && reviewsSearched()}
          </div>
        )}
      </div>
    );
  }
}

export default App;