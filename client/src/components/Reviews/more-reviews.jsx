import React from 'react';
import Styles from './styles.js';

class MoreReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addPosts(this.props.prevPosts);
    this.props.clickTracking('more-reviews-button', 'Reviews');
  }

  render() {
    return (
      <Styles.UtilityContainer>
        <Styles.ReviewButton
          onClick={this.handleClick}
          type="button"
          data-testid="more-reviews"
        >
          More Reviews
        </Styles.ReviewButton>
      </Styles.UtilityContainer>
    );
  }
}

export default MoreReviews;
