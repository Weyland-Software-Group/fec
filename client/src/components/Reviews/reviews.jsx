import React from 'react';
// import ReactDOM from 'react-dom';
import RatingsReviews from './ratings-reviews.jsx';
import SortBy from './sort-by.jsx';
import ReviewPosts from './review-posts.jsx';
import MoreReviews from './more-reviews.jsx';
import AddReview from './add-review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="reviews">
        <div className="reviews-col-1">
          <RatingsReviews data={this.props.data} />
        </div>
        <div className="reviews-col-2">
          <SortBy data={this.props.data} />
            {
              this.props.data.reviews.reviews.results.map( result => <ReviewPosts data={this.props.data} title={result.summary} body={result.body} /> )
            }
          <div className="reviews-btn-row">
            <MoreReviews data={this.props.data} />
            <AddReview data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
