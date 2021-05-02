/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.js';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { cartInformation, cartStyles } = this.props.item;
    const { results } = cartStyles;
    const { photos } = results[0];
    const { url } = photos[0];

    return (
      <styles.cart>
        <styles.cartImg alt="" src={url} />
        <styles.cartText>
          <h2>{cartInformation.name}</h2>
          <div>Style: {results[0].name}</div>
          <div>Sale price: {results[0].original_price}</div>
          <div>Size: M</div>
          <div>Quntity: 2</div>
        </styles.cartText>
      </styles.cart>
    );
  }
}

export default Cart;
