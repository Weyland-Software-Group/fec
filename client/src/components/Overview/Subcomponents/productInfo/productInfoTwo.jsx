/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ProductInfoTwoItem from './productInfoTwoItem.jsx';
import styles from './styles.js';

const ProductInfoTwo = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <styles.ConInfo>
        <styles.Ltext>{this.props.data.product.slogan}</styles.Ltext>
        <styles.productInformationFooter>
          <styles.fontDescription>
            {this.props.data.product.description}
          </styles.fontDescription>
          <ul>
            {this.props.data.product.features.map((feature, index) => (
              <ProductInfoTwoItem feature={feature} key={index} />
            ))}
          </ul>
        </styles.productInformationFooter>
      </styles.ConInfo>

    );
  }
};

export default ProductInfoTwo;
