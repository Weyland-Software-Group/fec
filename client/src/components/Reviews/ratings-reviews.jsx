import React from 'react';
import helpers from './helpers.js';
import Star from './star.jsx';
import RatingsCount from './ratings-count.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.reviews = this.props.data.reviews;

    this.state = this.getRatings();

    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.createRatingsCountBars = this.createRatingsCountBars.bind(this);
    this.getRatings = this.getRatings.bind(this);
  };

  getRecommendationPercentage () {
    const recommendationArray = [];
    for (let result of this.reviews.reviews.results) {
      if (result.recommend) recommendationArray.push(1);
      else { recommendationArray.push(0) };
    }
    return `${helpers.average(recommendationArray) * 100}%`;
  }

  getRatings() {
    let rating = helpers.averageOfRatings(this.reviews.reviewMeta.ratings);
    let fit = this.reviews.reviewMeta.characteristics.Fit.value / 5;
    let comfort = this.reviews.reviewMeta.characteristics.Comfort.value / 5;
    const recommendationPercentage = this.getRecommendationPercentage();
    fit = fit * 94, comfort = comfort * 94;

    if (rating.toString().length === 1) {
      rating = rating.toString() + '.0';
    }
    return { rating, fit, comfort, recommendationPercentage };
  }

  getRatingPercentage () {
    let percentage = this.state.rating / 5;
    percentage = percentage * 100;
    return `${Math.round(percentage / 10) * 10}%`;
  }

  createRatingsCountBars () {
    //should be percentage of total reviews
    const ratingsPercentages = helpers.findReviewPercentage(this.props.data.reviews.reviewMeta.ratings);
    const ratingsCountBars = [];
    let width;
    for (let i = 5; i > 0; i--) {
      if (ratingsPercentages[i]) width = ratingsPercentages[i] * 100;
      else {
        width = 0;
      }
      ratingsCountBars.push(<RatingsCount reviews={this.reviews} width={width + '%'} stars={i}/>);
    }
    return ratingsCountBars;
  }

  render() {
    const starInnerWidth = {
      width: this.getRatingPercentage()
    };

    const positionCarrot1 = {
      left: this.state.fit + '%'
    }

    const positionCarrot2 = {
      left: this.state.comfort + '%'
    }

    return (
      <div>
        <h5>Ratings and Reviews</h5>
        <div className="star-rating-container">
          <div className="star-rating-header">{this.state.rating}</div>
          <div className="star-container">
            <div className="stars-outer">
              <div style={starInnerWidth} className="stars-inner"></div>
            </div>
          </div>
        </div>
        <div className="individual-ratings-container">
          <h4 className="recommendation-percentage">{this.state.recommendationPercentage}
          of reviews recommend this product out of {this.reviews.reviews.results.length} total reviews</h4>
          {this.createRatingsCountBars().map(ratingsCountBar => ratingsCountBar)}
        </div>
        <div className="size-comfort-scale">
          <div className="size-comfort-container">
            <span className="size-comfort-heading">Size</span>
            <i style={positionCarrot1} className="fas fa-caret-down size-comfort-carrot"></i>
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
          <div className="size-comfort-container">
            <span className="size-comfort-heading">Comfort</span>
            <i style={positionCarrot2} className="fas fa-caret-down size-comfort-carrot"></i>
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
      </div>
    );
  }
}

export default RatingsReviews;
