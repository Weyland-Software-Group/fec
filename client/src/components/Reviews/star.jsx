import React from 'react';

const darkStar = <i className="fas fa-star fa-xs" id="star"></i>;
const lightStar = <i className="far fa-star fa-xs" id="star"></i>;

class Star extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.darkStar === true) {
      return (
        <div>
          {darkStar}
        </div>
      );
    }
    return (
      <div>
        {lightStar}
      </div>
    );
  }
}

export default Star;
