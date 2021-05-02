import React from 'react';
import helpers from './helpers.js';
import Styles from './styles.js'

class RatingsCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getTotalStarRatings = this.getTotalStarRatings.bind(this);
    this.ratingFilter = this.ratingFilter.bind(this);
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
    this.props.addPosts(0);
  }

  render() {
    const elWidth = {
      width: this.props.width
    };

    return (
      <Styles.IndividualRatings onClick={this.ratingFilter}>
        <Styles.RatingsPopUp>{this.props.stars + ' stars'}</Styles.RatingsPopUp>
        <Styles.StarReviewScale>
          <Styles.StarReviewScaleInner style={elWidth}></Styles.StarReviewScaleInner>
        </Styles.StarReviewScale>
        <Styles.TotalStarRatings>
          {this.getTotalStarRatings(this.props.stars)}
          {' total'}
        </Styles.TotalStarRatings>
      </Styles.IndividualRatings>
    );
  }
}

export default RatingsCount;
