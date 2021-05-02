/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class ImageGalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const num = this.props.num;
    this.props.reSetCurrent(num);
  }

  render() {
    return (
      <div className="image-vertical">
        <img
          alt=""
          src={this.props.item.thumbnail_url}
          onClick={this.handleClick}
        />
      </div>

    );
  }
}

export default ImageGalleryItem;
