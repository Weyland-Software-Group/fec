/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProductInfoTwoItem from './productInfoTwoItem.jsx';

const Ltext = styled.div`
font-family: "Helvetica", Arial, sans-serif;
font-size: 1.6rem;
`;

const ConInfo = styled.div`
margin: 10px;
`;

const ProductInfoTwo = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ConInfo>
        <Ltext>{this.props.data.product.slogan}</Ltext>
        <div className="product-information-footer">
          <p className="font-description">
            {this.props.data.product.description}
          </p>
          <ul>
            {this.props.data.product.features.map((feature, index) => (
              <ProductInfoTwoItem feature={feature} key={index} />
            ))}
          </ul>
        </div>
      </ConInfo>

    );
  }
};

export default ProductInfoTwo;
