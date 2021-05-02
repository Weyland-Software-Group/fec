/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';
import styles from './styles.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      outfits: [],
    };

    this.onChange = this.onChange.bind(this);
    this.dark = this.dark.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  dark() {
    this.props.toggleColorMode();
    const element = document.body;
    const nav = document.getElementById('nav');
    element.classList.toggle('dark-mode');
    nav.classList.toggle('navbar-dark');
  }

  render() {
    return (
      <styles.header>

        <nav className="navbar" id="nav">
          <em>Project Catwalk</em>
        </nav>

        <styles.header_below>
          <div>SITE WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</div>
        </styles.header_below>

        <button
          type="button"
          className="button-dark"
          onClick={this.dark}
        >
          Color
        </button>

        <styles.header_right>

          <button
            type="button"
            className="shopping-bag"
            onClick={this.props.showCart}
          >
            Bag
          </button>

          <styles.search>
            search:
            <input
              value={this.state.term}
              onChange={this.onChange}
            />
          </styles.search>
        </styles.header_right>

      </styles.header>
    );
  }
}

export default Header;
