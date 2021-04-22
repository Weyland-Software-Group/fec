/* eslint-disable no-unused-labels */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
// import ReactDOM from 'react-dom';
import RatingsReviews from './ratings-reviews.jsx';
import SortBy from './sort-by.jsx';
import ReviewPosts from './review-posts.jsx';
import MoreReviews from './more-reviews.jsx';
import AddReview from './add-review.jsx';
import helpers from './helpers.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterBy: [],
      showPosts: 2,
    };

    this.filterReviews = this.filterReviews.bind(this);
    this.addPosts = this.addPosts.bind(this);
  }

  filterReviews(newFilter) {
    const filterByArr = this.state.filterBy;
    if (filterByArr.includes(newFilter)) {
      filterByArr.splice(filterByArr.indexOf(newFilter), 1);
    } else {
      filterByArr.push(newFilter);
    }
    this.setState({
      filterBy: filterByArr,
    });
  }

  addPosts(prevPosts) {
    this.setState({
      showPosts: prevPosts + 2,
    });
  }

  render() {
    const renderReviewPosts = () => {
      if (this.state.filterBy.length) {
        return this.props.data.reviews.reviews.results
          .filter(result => this.state.filterBy.includes(result.rating))
          .slice(0, this.state.showPosts)
          .map(result => <ReviewPosts
            data={this.props.data}
            title={result.summary}
            body={result.body}
            user={result.reviewer_name}
            date={result.date}
            rating={result.rating}
          />);
      }
      return this.props.data.reviews.reviews.results
        .slice(0, this.state.showPosts)
        .map(result => <ReviewPosts
          data={this.props.data}
          title={result.summary}
          body={result.body}
          user={result.reviewer_name}
          date={result.date}
          rating={result.rating}
        />);
    };

    return (
      <div className="reviews">
        <div className="reviews-col-1">
          <RatingsReviews filter={this.filterReviews} data={this.props.data} />
        </div>
        <div className="reviews-col-2">
          <SortBy data={this.props.data} />
          {renderReviewPosts()}
          <div className="reviews-btn-row">
            <MoreReviews
              prevPosts={this.state.showPosts}
              addPosts={this.addPosts}
              data={this.props.data}
            />
            <AddReview data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
