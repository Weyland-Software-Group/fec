import React from 'react';
import Styles from './styles.js';

class AddReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderForm = this.renderForm.bind(this);
    this.clickTracker = this.clickTracker.bind(this);
  }

  clickTracker() {
    this.props.clickTracking('add-review-button', 'Reviews');
  }

  renderForm() {
    this.clickTracker();
    this.props.changeFormState(true);
  }

  render() {
    return (
      <Styles.UtilityContainer>
        <Styles.ReviewButton
          onClick={this.renderForm}
          type="button"
          data-testid="add-review"
        >
          Add Review
        </Styles.ReviewButton>
      </Styles.UtilityContainer>
    );
  }
}

export default AddReview;
