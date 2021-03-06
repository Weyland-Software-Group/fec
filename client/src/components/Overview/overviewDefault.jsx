/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import Header from './Subcomponents/header.jsx';
import ProductInfoOne from './Subcomponents/productInfo/productInfoOne.jsx';
import ImageGallery from './Subcomponents/imageGallery/imageGallery.jsx';
import StyleSelector from './Subcomponents/styleSelector/styleSelector.jsx';
import AddToCart from './Subcomponents/addToCart/addToCart.jsx';
import ProductInfoTwo from './Subcomponents/productInfo/productInfoTwo.jsx';
import styles from './Subcomponents/styles.js';

class OverviewDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <styles.overview_default>
        <styles.header>
          <Header
            data={this.props.data}
            dataReady={this.props.dataReady}
            showCart={this.props.showCart}
            toggleColorMode={this.props.toggleColorMode}
            clickHandler={this.props.clickHandler}
          />
        </styles.header>

        <styles.main>
          <ImageGallery
            data={this.props.style}
            defaultView={this.props.defaultView}
            expandView={this.props.expandView}
            clickHandler={this.props.clickHandler}
          />
        </styles.main>

        <styles.sidebar>
          <ProductInfoOne
            data={this.props.data}
            photos={this.props.style}
            ratingPercentage={this.props.ratingPercentage}
            clickHandler={this.props.clickHandler}
          />
          <br />
          <StyleSelector
            data={this.props.data}
            photos={this.props.style}
            selectStyle={this.props.selectStyle}
            clickHandler={this.props.clickHandler}
          />
          <br />
          <AddToCart
            data={this.props.data}
            style={this.props.style}
            outfit={this.state.outfit}
            refreshOutfit={this.props.refreshOutfit}
            clickHandler={this.props.clickHandler}
            getCart={this.props.getCart}
          />
        </styles.sidebar>

        <styles.footer>
          <ProductInfoTwo data={this.props.data} />
        </styles.footer>

        <br />
      </styles.overview_default>
    );
  }
}

export default OverviewDefault;
