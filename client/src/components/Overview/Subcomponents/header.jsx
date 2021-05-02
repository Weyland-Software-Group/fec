/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';

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
      <div className="header">

        <nav className="navbar" id="nav">
          <em>Project Catwalk</em>
        </nav>

        <div className="header-below">
          <div>SITE WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT</div>
        </div>

        <button
          type="button"
          className="button-dark"
          onClick={this.dark}
        >
          dark
        </button>

        <div className="header-right">

          <button
            type="button"
            className="shopping-bag"
            onClick={this.props.showCart}
          >
            Bag
          </button>

          <div className="search">
            search:
            <input
              value={this.state.term}
              onChange={this.onChange}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
