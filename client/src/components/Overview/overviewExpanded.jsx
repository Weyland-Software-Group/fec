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

class OverViewExpanded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="overview-expanded">
        <div className="header">
          <Header
            data={this.props.data}
            showCart={this.props.showCart}
          />
        </div>

        <div className="main-expanded">
          <ImageGallery
            data={this.props.style}
            defaultView={this.props.defaultView}
            expandView={this.props.expandView}
          />
        </div>

        <div className="footer">
          <ProductInfoTwo data={this.props.data} />
        </div>

        <br />
      </div>
    );
  }
}

export default OverViewExpanded;
