/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
// import styled from 'styled-components';
import Header from './header.jsx';
import ProductInfoOne from './productInfoOne.jsx';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';
import ProductInfoTwo from './productInfoTwo.jsx';

const Overview = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style_photos: this.props.data.styles.results[0],
      defaultView: true,
    };

    this.selectStyle = this.selectStyle.bind(this);
    this.expandView = this.expandView.bind(this);
  }

  // compoentDidMount() {

  // }

  selectStyle(photos) {
    this.setState({
      style_photos: photos,
    });
  }

  expandView() {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      defaultView: this.state.defaultView === true ? false : true,
    });
  }

  render() {
    return (
      <div className="overview-default">
        <div className="header">
          <Header data={this.props.data} />
        </div>

        {/* <div className="body"> */}
        <div className="main">
          <ImageGallery
            data={this.state.style_photos}
            expandView={this.expandView}
          />
        </div>

        <div className="sidebar">
          <ProductInfoOne
            data={this.props.data}
            photos={this.state.style_photos}
          />
          <br />
          <StyleSelector
            photos={this.state.style_photos}
            data={this.props.data}
            selectStyle={this.selectStyle}
          />
          <br />
          <AddToCart data={this.props.data} />
        </div>
        {/* </div> */}

        <div className="footer">
          <ProductInfoTwo data={this.props.data} />
        </div>

        <br />
      </div>
    );
  }
};

export default Overview;