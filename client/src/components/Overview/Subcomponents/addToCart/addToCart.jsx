/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';
import Func from '../helpers.js';
import AddCart from '../APIHandlers/addCart.js';
import styles from './styles.js';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'XS',
      size_num: 8,
      skuID: null,
      quantity: null,
      alert: false,
    };

    this.addToCart = this.addToCart.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
  }

  addToCart(id) {
    const { skuID } = this.state;
    if (skuID) {
      AddCart(skuID, () => {});
      const { getCart } = this.props;

      let string = localStorage.getItem('cart');
      if (string === null) {
        localStorage.setItem('cart', id.toString());
      } else {
        this.currentCart = string.split(',');
        if (this.currentCart.indexOf(id.toString()) === -1) {
          this.currentCart.push(id.toString());
          localStorage.setItem('cart', this.currentCart);
        } else {
          localStorage.setItem('cart', id.toString());
        }
      }
      this.props.getCart();
      this.setState({ alert: false });
    } else if (skuID === null) {
      this.setState({ alert: true });
    }
  }

  addToOutfit(id) {
    const { refreshOutfit } = this.props;
    const string = localStorage.getItem('outfit');
    if (string === null) {
      localStorage.setItem('outfit', id.toString());
    } else {
      this.currentOutfit = string.split(',');
      if (this.currentOutfit[0] !== '' && this.currentOutfit.indexOf(id.toString()) === -1) {
        this.currentOutfit.push(id.toString());
        localStorage.setItem('outfit', this.currentOutfit);
        refreshOutfit();
      } else {
        localStorage.setItem('outfit', id.toString());
      }
    }
    refreshOutfit();
  }

  render() {
    const { data } = this.props;
    const { id } = data.product;
    return (
      <styles.addToCart>

        <select
          className="select-size"
          onChange={(e) => {
            const skuID = JSON.parse(e.target.value)[0];
            const size = JSON.parse(e.target.value)[1].size;
            const quantity = JSON.parse(e.target.value)[1].quantity;
            this.setState({
              size,
              size_num: quantity,
              skuID,
            });
          }}
        >
          <styles.selection_box_font defaultValue="select size">select size</styles.selection_box_font>
          {Func.convertObjToArray(this.props.style.skus).map((item) => (
            <option
              key={item[0]}
              value={JSON.stringify(item)}
            >
              {item[1].size}
            </option>
          ))}

        </select>

        <select
          className="select-quantity"
          onChange={(e) => {
            this.setState({
              quantity: e.target.value,
            });
          }}
        >
          <styles.selection_box_font defaultValue="select quantity">select quantity</styles.selection_box_font>

          {Func.renderNum(this.state.size_num).map((item, index) => {
            if (!item) {
              return <option>OUT OF STOCK</option>;
            }
            return (
              <option
                key={index}
                value={item}
              >
                {item}
              </option>
            );
          })}

        </select>
        <br />

        <button
          className="button-bag"
          type="button"
          onClick={() => { this.addToCart(id); }}
        >
          Add to Bag
        </button>

        <styles.button_outfit
          type="button"
          onClick={() => { this.addToOutfit(id); }}
        >
          Outfit
        </styles.button_outfit>

        {this.state.alert && (
          <div>Please select size and quantity</div>
        )}

      </styles.addToCart>

    );
  }
}

export default AddToCart;
