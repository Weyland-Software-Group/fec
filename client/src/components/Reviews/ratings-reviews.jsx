import React from 'react';
import helpers from './helpers.js';
import Star from './star.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.rating = 4.5;

    this.state = {
      starArray: this.starProducer()
    };

    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.starProducer = this.starProducer.bind(this);
    this.starProducer();
  };

  getAverageRating() {
    console.log(this.getRatingPercentage())
    let avgRating = helpers.averageOfRatings(this.props.data.reviews.reviewMeta.ratings);
    if (avgRating.toString().length === 1) {
      avgRating = avgRating.toString() +'.0';
    }
    return avgRating;
  }

  starProducer() {
    let darkStars = this.getAverageRating();
    const starsArray = [];
    // for (let i = 0; i < 5; i++) {
    //   if (darkStars >= 1) {
    //     starsArray.push(true);
    //   } else {
    //     starsArray.push(false);
    //   }
    //   darkStars--;
    // }

    return starsArray;
  }

  getRatingPercentage () {
    let percentage = this.rating / 5;
    percentage = percentage * 100;
    return `${Math.round(percentage / 10) * 10}%`;
  }

  render() {
    return (
      <div>
        <h5>Ratings and Reviews</h5>
        <div className="star-rating-container">
          <div className="star-rating-header">{this.getAverageRating()}</div>
          <div className="star-container">
            {/* { this.state.starArray
              .map(star => <Star darkStar={star} />) } */}
            <div className="stars-outer">
              <div className="stars-inner"></div>
              <span className="number-rating"></span>
            </div>
          </div>
        </div>
        <div className="individual-ratings-container">
          <h4 className="recommendation-percentage">100% of reviews recommend this product</h4>
          <div className="individual-ratings">
            <a href="#">5 stars</a>
            <div className="star-review-scale"></div></div>
          <div className="individual-ratings">
            <a href="#">4 stars</a>
            <div className="star-review-scale"></div></div>
          <div className="individual-ratings">
            <a href="#">3 stars</a>
            <div className="star-review-scale"></div></div>
          <div className="individual-ratings">
            <a href="#">2 stars</a>
            <div className="star-review-scale"></div></div>
          <div className="individual-ratings">
            <a href="#">1 stars</a>
            <div className="star-review-scale"></div></div>
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
