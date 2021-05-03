/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
import React from 'react';
import helpers from './helpers.js';
import RatingsCount from './ratings-count.jsx';
import ProductBreakdown from './product-breakdown.jsx'
import Styles from './styles.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.reviews = this.props.data.reviews;

    this.state = {
      productBreakdownComponents: [],
    };

    this.createRatingsCountBars = this.createRatingsCountBars.bind(this);
    this.filtersApplied = this.filtersApplied.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.renderProductBreakdown = this.renderProductBreakdown.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.clickTracker = this.clickTracker.bind(this);
  }

  componentDidMount() {
    const ratings = this.getRatings();
    this.setState({
      recommendationPercentage: ratings.recommendationPercentage,
      productDetails: [
        { fit: ratings.fit },
        { comfort: ratings.comfort },
        { length: ratings.length },
        { quality: ratings.quality },
      ],
    }, () => this.getRating());
  }

  getRating() {
    const avgRating = helpers.getRating(this.state.avgRating, this.reviews.reviewMeta.ratings);
    this.setState({
      avgRating,
    }, () => this.getRatingPercentage());
  }

  getRatingPercentage() {
    const ratingPercentage = helpers.getRatingPercentage(this.state.avgRating);
    this.setState({
      ratingPercentage,
    }, () => this.renderProductBreakdown());
  }

  getRecommendationPercentage() {
    const recommendationArray = [];
    for (let result of this.reviews.reviews.results) {
      if (result.recommend) recommendationArray.push(1);
      else { recommendationArray.push(0) };
    }
    if (!recommendationArray.length) {
      return '0 ';
    }
    return `${(helpers.average(recommendationArray) * 100).toFixed(2)}% `;
  }

  getRatings() {
    let fit = null;
    let comfort = null;
    let length = null;
    let quality = null;
    if (this.reviews.reviewMeta.characteristics.Fit) {
      fit = this.reviews.reviewMeta.characteristics.Fit.value / 5;
    }
    if (this.reviews.reviewMeta.characteristics.Fit) {
      comfort = this.reviews.reviewMeta.characteristics.Comfort.value / 5;
    }
    if (this.reviews.reviewMeta.characteristics.Fit) {
      length = this.reviews.reviewMeta.characteristics.Length.value / 5;
    }
    if (this.reviews.reviewMeta.characteristics.Fit) {
      quality = this.reviews.reviewMeta.characteristics.Quality.value / 5;
    }
    const recommendationPercentage = this.getRecommendationPercentage();
    fit = fit * 94, comfort = comfort * 94, length = length * 94, quality = quality * 94;

    return { fit, comfort, recommendationPercentage, length, quality };
  }

  createRatingsCountBars() {
    const ratingsPercentages = helpers.findReviewPercentage(this.props.data.reviews.reviewMeta.ratings);
    const ratingsCountBars = [];
    let width;
    for (let i = 5; i > 0; i--) {
      if (ratingsPercentages[i]) width = ratingsPercentages[i] * 100;
      else {
        width = 0;
      }
      ratingsCountBars.push(
        <RatingsCount
          key={Math.random() * 10000}
          addPosts={this.props.addPosts}
          filter={this.props.filter}
          reviews={this.reviews}
          width={width + '%'}
          stars={i}
        />,
      );
    }
    return ratingsCountBars;
  }

  filtersApplied() {
    const filtersArr = [];
    if (this.props.filterBy === []) return;
    this.props.filterBy.forEach(filter => filtersArr
      .push(
        <div className="filters-applied">{filter} star reviews</div>,
      ));
    return filtersArr;
  }

  removeFilter() {
    this.props.filter(null, this.showFilters);
  }

  clickTracker() {
    this.props.clickTracking(`${this.props.filterBy} star rating filter in ratings breakdown`, 'Reviews');
  }

  showFilters() {
    if (this.props.filterBy.length) {
      this.clickTracker();
      return (
        <div>
          <div className="underline filters-applied-title">Filters Applied:</div>
          {this.filtersApplied()}
          <div onClick={this.removeFilter} className="underline remove-filters">Remove Filters</div>
        </div>
      );
    }
    return <div />;
  }

  renderProductBreakdown() {
    const productArray = this.state.productDetails
    const components = [];
    for (let i = 0; i < productArray.length; i++) {
      let currentVal = Object.values(productArray[i]);
      let currentKey = Object.keys(productArray[i]);
      if (currentVal[0] !== null) {
        components.push(
          <ProductBreakdown
            detailType={currentKey[0]}
            position={currentVal[0]}
            key={Math.random() * 10000}
          />,
        );
      }
    }
    this.setState({
      productBreakdownComponents: components,
    });
  }

  render() {
    const starInnerWidth = {
      width: this.state.ratingPercentage,
    };

    return (
      <div>
        <h4 data-testid="ratings-reviews-heading" className="sub-heading">Ratings and Reviews</h4>
        <Styles.StarRatingContainer>
          <Styles.StarRatingHeader>{this.state.avgRating}</Styles.StarRatingHeader>
          <Styles.StarContainer>
            <Styles.StarsOuterBefore>
              <Styles.StarsInnerBefore style={starInnerWidth} />
            </Styles.StarsOuterBefore>
          </Styles.StarContainer>
        </Styles.StarRatingContainer>
        <div className="individual-ratings-container">
          <h4 className="sub-heading">Ratings Breakdown:</h4>
          <h4 className="recommendation-percentage">{this.state.recommendationPercentage}
          of reviews recommend this product out of {this.reviews.reviews.results.length} total reviews</h4>
          {this.createRatingsCountBars().map(ratingsCountBar => ratingsCountBar)}
          <div>{this.showFilters()}</div>
        </div>
        <Styles.SizeComfortScale>
          {this.state.productBreakdownComponents.map(component => component)}
        </Styles.SizeComfortScale>
      </div>
    );
  }
}

export default RatingsReviews;
