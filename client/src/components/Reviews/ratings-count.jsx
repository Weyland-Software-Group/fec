import React from 'react';

class RatingsCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    const elWidth = {
      width: this.props.width
    };

    return (
      <div className="individual-ratings">
        <a href="#">{this.props.stars + ' stars'}</a>
        <div className="star-review-scale">
          <div style={elWidth} className="star-review-scale-inner"></div>
        </div>
      </div>
    );
  }
}

export default RatingsCount;
