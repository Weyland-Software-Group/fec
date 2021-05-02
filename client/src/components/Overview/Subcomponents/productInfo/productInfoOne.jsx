/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Rtext = styled.div`
font-size: 1rem;
color: red;
`;

class ProductInfoOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="product-information">
        <div className="">{this.props.ratingPercentage}</div>
        <div>Read all reviews</div>
        <br />
        <div>CATEGORY: {this.props.data.product.category}</div>
        <h1 className="title-size">{this.props.data.product.name}</h1>
        <div>Price: ${this.props.photos.original_price}</div>
        <div>
          {(this.props.photos.sale_price)
          && <Rtext>Sale: ${this.props.photos.sale_price}</Rtext>}
        </div>
      </div>

    );
  }
}

export default ProductInfoOne;
