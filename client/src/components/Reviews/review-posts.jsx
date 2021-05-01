import React from 'react';
import Styles from './styles.js';
import UpdateHelpfulness from './APIHandlers/updateHelpfulness.js'
const moment = require('moment');

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

    this.reviews = this.props.data.reviews;

    this.state = {
      helpfulness: this.props.helpfulness,
    };

    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
    this.renderReviewImages = this.renderReviewImages.bind(this);
    this.renderSellerResponse = this.renderSellerResponse.bind(this);
    this.updateHelpfulness = this.updateHelpfulness.bind(this);
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

  updateHelpfulness() {
    UpdateHelpfulness(this.props.review_id, () => {
      const currentHelpfulness = this.state.helpfulness;
      this.setState({
        helpfulness: currentHelpfulness + 1,
      });
    });
    this.props.clickTracking('helpfulness button inside review posts', 'Reviews');
  }

  renderReviewImages() {
    const photoArr = this.props.photos;
    const imgTags = [];
    if (photoArr.length) {
      photoArr.map(photo => {
        imgTags.push(<Styles.ReviewPostImg src={photo.url} />);
      });
    }
    return imgTags;
  }


  renderRecommendation() {
    if (this.props.recommend) {
      return (
        <Styles.RecommendCheckboxContainer>
          Yes
          <input type="checkbox" checked />
          No
          <input type="checkbox" />
        </Styles.RecommendCheckboxContainer>
      );
    }
    return (
      <Styles.RecommendCheckboxContainer>
        Yes
        <input type="checkbox" />
        No
        <input type="checkbox" checked />
      </Styles.RecommendCheckboxContainer>
    );
  }

  renderSellerResponse() {
    if (this.props.response) {
      return (
        <Styles.UtilityContainer>
          Seller Response:
          <Styles.SellerResponse>{this.props.response}</Styles.SellerResponse>
        </Styles.UtilityContainer>
      );
    }
  }

  render() {
    const starInnerWidth = {
      width: this.getRatingPercentage(),
    };

    return (
      <Styles.UtilityContainer>
        <Styles.ReviewPost>
          <Styles.ReviewPostTopRow>
            <Styles.ReviewPostStarRatingContainer>
              <Styles.ReviewPostStarContainer>
                {/* <div className="stars-outer">
                  <div style={starInnerWidth} className="stars-inner" />
                </div> */}
                <Styles.StarsOuterBefore>
                  <Styles.StarsInnerBefore style={starInnerWidth}></Styles.StarsInnerBefore>
                </Styles.StarsOuterBefore>
              </Styles.ReviewPostStarContainer>
            </Styles.ReviewPostStarRatingContainer>

            <Styles.UsernameDate>{`${this.props.user}, ${moment(this.props.date).format('DD/MM/YYYY')}`}</Styles.UsernameDate>
          </Styles.ReviewPostTopRow>
          <Styles.ReviewPostTitle>{this.props.title}</Styles.ReviewPostTitle>
          <Styles.ReviewPostBody>{this.props.body}</Styles.ReviewPostBody>
          <Styles.RecommendProduct>
            I recommend this product:
            {this.renderRecommendation()}
          </Styles.RecommendProduct>
          <Styles.ReviewPostImgContainer>
            {this.renderReviewImages()}
          </Styles.ReviewPostImgContainer>
          <Styles.UtilityContainer>
            {this.renderSellerResponse()}
          </Styles.UtilityContainer>
          <Styles.ReviewPostBottomRow>
            Helpful? <Styles.Helpful onClick={this.updateHelpfulness}> Yes({this.state.helpfulness}) </Styles.Helpful>
            |
            <Styles.Helpful> Report</Styles.Helpful>
          </Styles.ReviewPostBottomRow>
        </Styles.ReviewPost>
      </Styles.UtilityContainer>
    );
  }
}

export default ReviewPosts;
