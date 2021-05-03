/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable class-methods-use-this */
import React from 'react';
import ProductCharacteristics from './product-characteristics.jsx';
import PhotoSelector from './photo-selector.jsx';
import helpers from './helpers.js';
import Styles from './styles.js';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: '',
      body: '',
      displayPhotoSelector: false,
      email: '',
      nickname: '',
      formStars: [],
      characteristics: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.starProducer = this.starProducer.bind(this);
    this.setStarRating = this.setStarRating.bind(this);
    this.produceProductCharacteristics = this.produceProductCharacteristics.bind(this);
    this.displayErrorMessage = this.displayErrorMessage.bind(this);
    this.renderPhotoSelector = this.renderPhotoSelector.bind(this);
    this.setPhotoSelectorState = this.setPhotoSelectorState.bind(this);
    this.postReview = this.postReview.bind(this);
    this.addCharacteristicsToState = this.addCharacteristicsToState.bind(this);
  }

  componentDidMount() {
    this.starProducer();
  }

  handleSubmit(e) {
    e.preventDefault();
    const errorMessage = 'You must enter the folowing';
    if (!this.state.summary.length ||
      !this.state.body.length ||
      !this.state.email.length ||
      !this.state.nickname.length) {
      this.setState({
        error: errorMessage,
      });
    } else {
      const reviewResults = this.props.reviews.reviews.results;
      console.log(reviewResults);
      const postObj = {
        review_id: reviewResults[reviewResults.length - 1].review_id + 1,
        rating: this.state.starsToFill,
        summary: this.state.summary,
        response: '',
        body: this.state.body,
        reviewer_name: this.state.nickname,
        helpfulness: 0,
        photos: [],
      };

      this.postReview(postObj);

      alert('Thank you for your submission');
      this.hideForm();
    }
  }

  hideForm() {
    this.props.hideForm(false);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  setStarRating(e) {
    this.setState({
      starsToFill: +e.target.id,
    }, () => this.starProducer());
  }

  addCharacteristicsToState(name, description) {
    console.log(name, description)
    const characteristics = this.state.characteristics;

    characteristics[name] = description;
    this.setState({
      characteristics,
    });
  }

  starProducer() {
    const stars = [];
    const darkStar = {
      fontWeight: 900,
    };
    const lightStar = {
      fontWeight: 200,
    };
    for (let i = 1; i < 6; i++) {
      if (this.state.starsToFill && i <= this.state.starsToFill) {
        stars.push(
          <div
            onClick={this.setStarRating}
            className="form-stars-outer"
            id={i}
            style={darkStar}
          />,
        );
      } else {
        stars.push(
          <div
            onClick={this.setStarRating}
            className="form-stars-outer"
            id={i}
            style={lightStar}
          />,
        );
      }
    }
    this.setState({
      formStars: stars,
      rating: stars.length,
    });
  }

  updateRecommend(recommendation) {
    this.setState({
      recommend: recommendation,
    });
  }

  produceProductCharacteristics() {
    const table = helpers.productCharacteristicsTable;
    let currentRow;
    const rows = [];
    for (let i = 0; i < table.length; i++) {
      currentRow = table[i];
      rows.push(
        <ProductCharacteristics
          handleChange={this.handleChange}
          addToParentState={this.addCharacteristicsToState}
          name={currentRow[0]}
          description={currentRow}
          key={Math.random() * 10000}
        />,
      );
    }
    return rows;
  }

  displayErrorMessage() {
    if (this.state.error) {
      return this.state.error;
    }
  }

  setPhotoSelectorState() {
    let newState;
    if (this.state.displayPhotoSelector === true) {
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      displayPhotoSelector: newState,
    });
  }

  postReview(newReview) {
    console.log(newReview);
    fetch(`/reviews/${this.props.productID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(newReview),
    })
      .then(result => console.log(result));
  }

  renderPhotoSelector() {
    if (this.state.displayPhotoSelector) {
      return (
        <PhotoSelector
          exit={this.setPhotoSelectorState}
          key={Math.random() * 10000}
        />
      );
    }
  }

  render() {
    const starInnerWidth = {
      width: this.state.starInnerWidth,
    };

    const center = {
      display: 'flex',
      justifyContent: 'center',
    };

    const renderRatingsDescription = () => {
      if (this.state.starsToFill) {
        return (
          <Styles.RatingsDescription>
            <li>1 star - "Poor"</li>
            <li>2 stars - "Fair"</li>
            <li>3 stars - "Average"</li>
            <li>4 stars - "Good"</li>
            <li>5 stars - "Great"</li>
          </Styles.RatingsDescription>
        );
      }
    };

    const error = {
      color: 'red',
    };

    return (
      <Styles.UtilityContainer>
        <Styles.Form className="form" onSubmit={this.handleSubmit}>
          <Styles.ExitForm onClick={this.hideForm} className="exit-form" type="button">X</Styles.ExitForm>
          <Styles.WriteReviewHeading>Write Your Review</Styles.WriteReviewHeading>
          <Styles.NewReviewHeader>About the product:</Styles.NewReviewHeader>
          <Styles.FormInputContainer>
            <Styles.FormRow>
              <Styles.FormLabel style={{ fontFamily: 'helvetica' }}>
                Do you recommend this product?:
                <Styles.RadioButtonLabel>
                  <Styles.RecommendInput onClick={() => this.updateRecommend(true)} type="radio" value="Yes" name="gender" />
                  Yes
                </Styles.RadioButtonLabel>
                <Styles.RadioButtonLabel>
                  <Styles.RecommendInput onClick={() => this.updateRecommend(false)} type="radio" value="No" name="gender" />
                  No
                </Styles.RadioButtonLabel>
              </Styles.FormLabel>
              <Styles.FormRatingContainer>
                <Styles.FormStarsContainer className="form-stars">
                  <Styles.FormStarsHeader>Overall rating:</Styles.FormStarsHeader>
                  {this.state.formStars.map(star => star)}
                </Styles.FormStarsContainer>
                {renderRatingsDescription()}
              </Styles.FormRatingContainer>
            </Styles.FormRow>
            <Styles.FormLabel style={center}>
              <Styles.ProductCharacteristicsContainer>
                <Styles.ProductCharacteristicsHeader>Product Characteristics:</Styles.ProductCharacteristicsHeader>
                <Styles.UtilityContainer>{this.produceProductCharacteristics()}</Styles.UtilityContainer>
              </Styles.ProductCharacteristicsContainer>
            </Styles.FormLabel>
            <Styles.FormRow>
              <Styles.TextInputLabel>
                Review Summary:
                <Styles.TextInputs
                  className="text-inputs"
                  type="text"
                  value={this.state.summary}
                  placeholder="Example: Best Purchase Ever!"
                  maxLength="60"
                  rows="2"
                  onChange={this.handleChange}
                  name="summary"
                  style={{ height: '40%' }}
                />
              </Styles.TextInputLabel>
            </Styles.FormRow>
            <Styles.FormRow>
              <Styles.TextInputLabel>
                Review Body:
                <Styles.TextInputs
                  className="text-inputs review-body"
                  type="text"
                  value={this.state.body}
                  placeholder="Why did you like the product or not?"
                  minLength="50"
                  rows="6"
                  onChange={this.handleChange}
                  name="body"
                  style={{ height: '60%' }}
                />
              </Styles.TextInputLabel>
            </Styles.FormRow>
            <Styles.FormRow>
              <Styles.TextInputLabel>
                Upload your photos:
                <Styles.PhotoSelectButton
                  className="photo-select-button"
                  onClick={this.setPhotoSelectorState}
                  name="photo-select"
                  type="button"
                >
                  Choose Photos
                </Styles.PhotoSelectButton>
              </Styles.TextInputLabel>
            </Styles.FormRow>
            <Styles.FormRow>
              <Styles.TextInputLabel>
                What is your nickname?:
                <Styles.TextInputs
                  className="text-inputs"
                  type="text"
                  value={this.state.nickname}
                  placeholder="Example: jackson11!"
                  maxLength="60"
                  onChange={this.handleChange}
                  name="nickname"
                />
              </Styles.TextInputLabel>
            </Styles.FormRow>
            <Styles.FormRow>
              <Styles.TextInputLabel>
                Email:
                <Styles.TextInputs
                  className="text-inputs"
                  type="email"
                  value={this.state.email}
                  placeholder="Example: jackson11@email.com"
                  maxLength="60"
                  onChange={this.handleChange}
                  name="email"
                />
              </Styles.TextInputLabel>
            </Styles.FormRow>
          </Styles.FormInputContainer>
          <Styles.ErrorMessage style={error}>{this.displayErrorMessage()}</Styles.ErrorMessage>
          <Styles.SubmitForm className="submit-form" type="submit" value="Submit" />
        </Styles.Form>
        <Styles.FormCover onClick={this.hideForm} className="form-cover" />
        <Styles.UtilityContainer>{this.renderPhotoSelector()}</Styles.UtilityContainer>
      </Styles.UtilityContainer>
    );
  }
}

export default ReviewForm;
