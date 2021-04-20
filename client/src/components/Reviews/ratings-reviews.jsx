import React from 'react';
import helpers from './helpers.js';
import Star from './star.jsx';
import RatingsCount from './ratings-count.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.rating = 4.5;

    this.state = {};

    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.createRatingsCountBars = this.createRatingsCountBars.bind(this);
  };

  getAverageRating() {
    let avgRating = helpers.averageOfRatings(this.props.data.reviews.reviewMeta.ratings);
    if (avgRating.toString().length === 1) {
      avgRating = avgRating.toString() +'.0';
    }
    return avgRating;
  }

  getRatingPercentage () {
    let percentage = this.rating / 5;
    percentage = percentage * 100;
    return `${Math.round(percentage / 10) * 10}%`;
  }

  createRatingsCountBars () {
    const ratingsPercentages = helpers.findReviewPercentage(this.props.data.reviews.reviewMeta.ratings);
    const ratingsCountBars = [];
    let width;
    for (let i = 5; i > 0; i--) {
      if (ratingsPercentages[i]) width = ratingsPercentages[i] * 100;
      else {
        width = 0;
      }
      ratingsCountBars.push(<RatingsCount width={width + '%'} stars={i}/>);
    }
    return ratingsCountBars;
  }

  render() {
    const starInnerWidth = {
      width: this.getRatingPercentage()
    };

    return (
      <div>
        <h5>Ratings and Reviews</h5>
        <div className="star-rating-container">
          <div className="star-rating-header">{this.getAverageRating()}</div>
          <div className="star-container">
            <div className="stars-outer">
              <div style={starInnerWidth} className="stars-inner"></div>
            </div>
          </div>
        </div>
        <div className="individual-ratings-container">
          <h4 className="recommendation-percentage">100% of reviews recommend this product</h4>
              {this.createRatingsCountBars().map(ratingsCountBar => ratingsCountBar)}
        </div>
        <div className="size-comfort-scale">
          <span className="size-comfort-heading">Size</span>
          <div className="size-comfort">
              <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Too small</small>
            </div>
            <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Perfect</small>
            </div>
            <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Too large</small>
            </div>
          </div>
          <span className="size-comfort-heading">Comfort</span>
          <div className="size-comfort">
            <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Too small</small>
            </div>
            <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Perfect</small>
            </div>
            <div className="size-comfort-sub-container">
              <div className="size-comfort-box"></div>
              <small>Too large</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
