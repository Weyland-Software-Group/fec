import React from 'react';
import helpers from './helpers.js';

class RatingsCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getTotalStarRatings = this.getTotalStarRatings.bind(this);
    this.ratingFilter = this.ratingFilter.bind(this);
  }

  getTotalStarRatings(currentRating) {
    let counter = 0;
    this.props.reviews.reviews.results.forEach(review => {
      if (review.rating === currentRating) {
        counter++;
      }
    });
    return counter;
  }

  ratingFilter() {
    this.props.filter(this.props.stars);
    this.props.addPosts(this.props.reviews.reviews.results.length);
  }

  render() {
    const elWidth = {
      width: this.props.width
    };

    return (
      <div onClick={this.ratingFilter} className="individual-ratings">
        <div className="ratings-pop-up underline">{this.props.stars + ' stars'}</div>
        <div className="star-review-scale">
          <div style={elWidth} className="star-review-scale-inner"></div>
        </div>
        <div className="total-star-ratings underline">{this.getTotalStarRatings(this.props.stars)} total</div>
      </div>
    );
  }
}

export default RatingsCount;
