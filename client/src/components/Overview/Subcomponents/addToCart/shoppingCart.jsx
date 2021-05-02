/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Cart from './cart.jsx';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedProductData: [],
      dataR: false,
    };

    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    const cartIDs = localStorage.getItem('cart');
    const cartID = cartIDs.split(',');
    const { cart } = this.props;
    const { cartInformation, cartStyles } = cart;

    const newSort = [];
    if (cartInformation && cartStyles) {
      for (let i = 0; i < cartID.length; i += 1) {
        newSort.push({
          cartInformation: cartInformation[i],
          cartStyles: cartStyles[i],
        });
      }
      this.setState({ sortedProductData: newSort, dataR: true });
    }
  }

  onClose() {
    this.props.onClose();
  }

  render() {
    if (this.state.dataR) {
      return (
        <div className="shopping-container">
          <h2>YOUR BAG</h2>
          <button
            type="button"
            className="shopping-button"
            onClick={this.onClose}
          >
            Back
          </button>

          {this.state.sortedProductData.map((item, index) => (
            <Cart
              item={item}
              key={index}
            />
          ))}

          <br />

        </div>
      );
    }
    return (
      <div className="shopping-container">
        {this.props.dataReady === true && (<div>Data Ready</div>)}
        <h2>YOUR BAG</h2>
        <button
          type="button"
          className="shopping-button"
          onClick={this.onClose}
        >
          Back
        </button>

        <br />

      </div>

    );
  }
}

export default ShoppingCart;
