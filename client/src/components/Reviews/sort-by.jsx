import React from 'react';

class ReviewPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="sort-by">
        {this.props.data.reviews.reviews.results.length} reviews, sorted by
        <a href="#"> relavance</a>
      </div>
    );
  }
}

export default ReviewPosts;