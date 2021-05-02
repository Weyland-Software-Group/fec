/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import StyleSelectorItem from './styleSelectorItem.jsx';

const Sname = styled.div`
font-size: 1rem;
`;

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="style-selector">
        <h5>
          selected style:
           <Sname>{this.props.photos.name}</Sname>
        </h5>
        {this.props.data.styles.results.map((item, i) => (
            <StyleSelectorItem
              item={item}
              key={i}
              selectStyle={this.props.selectStyle}
              clickHandler={this.props.clickHandler}
            />
        ))}
      </div>

    );
  }
}

export default StyleSelector;
