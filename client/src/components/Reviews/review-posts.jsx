import React from 'react';

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="review-post">
          <div className="review-post-top-row">
            <div className="star-rating">Stars</div>
            <div className="username-date">User 1234, January 1, 2019</div>
          </div>
          <h3 className="review-post-title">{this.props.title}</h3>
          <p className="review-post-body">{this.props.body}</p>
          <div className="review-post-top-row">
            Helpful? <a className="helpful" href="#"> Yes </a>
            |
            <a className="helpful" href="#"> Report</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewPosts;
