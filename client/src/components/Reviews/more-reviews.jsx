import React from 'react';

class MoreReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addPosts(this.props.prevPosts);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="review-btn" type="button">Review Posts</button>
      </div>
    );
  }
}

export default MoreReviews;
