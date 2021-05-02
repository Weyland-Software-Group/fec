/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './styles.js';

class StyleSelectorItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const element = 'style_selector';
    const widget = 'overview';
    const photos = this.props.item;
    this.props.selectStyle(photos);
    this.props.clickHandler(element, widget);
  }

  render() {
    return (
      <styles.circle>
        <img
          alt=""
          className="border-button"
          src={this.props.item.photos[0].thumbnail_url}
          onClick={this.handleClick}
        />
      </styles.circle>

    );
  }
}

export default StyleSelectorItem;
