/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './styles.js';

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
      <styles.imageVertical>
        <img
          alt=""
          src={this.props.item.thumbnail_url}
          onClick={this.handleClick}
        />
      </styles.imageVertical>

    );
  }
}

export default ImageGalleryItem;
