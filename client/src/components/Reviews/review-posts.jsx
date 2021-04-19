import React from 'react';
<<<<<<< HEAD
import helpers from './helpers.js';
const moment = require('moment');
=======
>>>>>>> Base component structure, and some dynamic data added.

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.reviews = this.props.data.reviews;

    this.state = {};

    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
  }

  getRating() {
    let rating = this.props.rating;

    if (rating.toString().length === 1) {
      rating = rating.toString() + '.0';
    }

    return rating;
  }

  getRatingPercentage() {
    let percentage = this.getRating() / 5;
    percentage *= 100;
    return `${Math.round(percentage / 10) * 10}%`;
  }

  render() {
    const starInnerWidth = {
      width: this.getRatingPercentage(),
    };

=======
    this.state = {

    };
  }

  render() {
>>>>>>> Base component structure, and some dynamic data added.
    return (
      <div>
        <div className="review-post">
          <div className="review-post-top-row">
<<<<<<< HEAD
            <div className="star-rating-container">
              <div className="star-container review-post-star-rating">
                <div className="stars-outer">
                  <div style={starInnerWidth} className="stars-inner"></div>
                </div>
              </div>
            </div>
            <div className="username-date">{`${this.props.user}, ${moment(this.props.date).format('MM/DD/YYYY')}`}</div>
=======
            <div className="star-rating">Stars</div>
            <div className="username-date">User 1234, January 1, 2019</div>
>>>>>>> Base component structure, and some dynamic data added.
          </div>
          <h3 className="review-post-title">{this.props.title}</h3>
          <p className="review-post-body">{this.props.body}</p>
          <div className="review-post-top-row">
            Helpful? <a className="helpful" href="#"> Yes </a>
            |
            <a className="helpful" href="#"> Report</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewPosts;