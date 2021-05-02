/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class ProductInfoTwoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <li>Feature: {this.props.feature.feature}</li>
        <li>Value: {this.props.feature.value}</li>
      </div>

    );
  }
}

export default ProductInfoTwoItem;
