/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import StyleSelectorItem from './styleSelectorItem.jsx';
import styles from './styles.js';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <styles.styleSelector>
        <h5>
          selected style:
           <styles.Sname>{this.props.photos.name}</styles.Sname>
        </h5>
        {this.props.data.styles.results.map((item, i) => (
            <StyleSelectorItem
              item={item}
              key={i}
              selectStyle={this.props.selectStyle}
              clickHandler={this.props.clickHandler}
            />
        ))}
      </styles.styleSelector>

    );
  }
}

export default StyleSelector;
