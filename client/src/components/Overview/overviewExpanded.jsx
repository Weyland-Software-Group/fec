/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import Header from './Subcomponents/header.jsx';
import ImageGallery from './Subcomponents/imageGallery/imageGallery.jsx';
import ProductInfoTwo from './Subcomponents/productInfo/productInfoTwo.jsx';
import styles from './Subcomponents/styles.js';

class OverviewExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <styles.overview_expanded>
        <styles.header>
          <Header
            data={this.props.data}
            showCart={this.props.showCart}
          />
        </styles.header>

        <styles.main_expanded>
          <ImageGallery
            data={this.props.style}
            defaultView={this.props.defaultView}
            expandView={this.props.expandView}
          />
        </styles.main_expanded>

        <styles.footer>
          <ProductInfoTwo data={this.props.data} />
        </styles.footer>

        <br />
      </styles.overview_expanded>
    );
  }
}

export default OverviewExpanded;
