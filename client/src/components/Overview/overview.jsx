/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import OverviewDefault from './overviewDefault.jsx';
import OverViewExpanded from './overviewExpanded.jsx';
import ShoppingCart from './Subcomponents/addToCart/shoppingCart.jsx';
// import sampleDataOutfit from '../sampleData_outfit.js';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style_photos: this.props.data.styles.results[0],
      defaultView: true,
      show: false,
      cart: null,
      dataReady: false,
    };

    this.getCart = this.getCart.bind(this);
    this.selectStyle = this.selectStyle.bind(this);
    this.expandView = this.expandView.bind(this);
    this.showCart = this.showCart.bind(this);
  }

  componentDidMount() {
    this.getCart();
  }

  getCart() {
    const cartIDs = localStorage.getItem('cart');
    $.ajax({
      url: '/api/cart',
      type: 'POST',
      data: { cartIDs },
      success: (responseData) => this.setState({
        cart: responseData.cart,
      }, () => {
        this.setState({ dataReady: true });
      }),
    });
  }

  expandView() {
    this.setState({
      defaultView: this.state.defaultView === true ? false : true,
    });
  }

  showCart() {
    this.setState({
      show: !this.state.show,
    });
  }

  selectStyle(photos) {
    this.setState({
      style_photos: photos,
    });
  }

  render() {
    const {
      data,
      outfitData,
      refreshOutfit,
      ratingPercentage,
    } = this.props;

    return (
      <div>
        {this.state.show === false && (
        <div>
          {this.state.defaultView === true && (
            <OverviewDefault
              data={data}
              outfitData={outfitData}
              refreshOutfit={refreshOutfit}
              dataReady={this.state.dataReady}
              ratingPercentage={ratingPercentage}
              style={this.state.style_photos}
              defaultView={this.state.defaultView}
              clickHandler={this.props.clickHandler}
              toggleColorMode={this.props.toggleColorMode}
              selectStyle={this.selectStyle}
              expandView={this.expandView}
              showCart={this.showCart}
              getCart={this.getCart}
            />
          )}

            {this.state.defaultView === false && (
            <OverViewExpanded
              data={data}
              style={this.state.style_photos}
              defaultView={this.state.defaultView}
              clickHandler={this.props.clickHandler}
              expandView={this.expandView}
              showCart={this.showCart}
            />
            )}
        </div>
        )}

        {this.state.show === true && (
          <div>
            <ShoppingCart
              show={this.state.show}
              style={this.state.style_photos}
              cart={this.state.cart}
              dataReady={this.state.dataReady}
              clickHandler={this.props.clickHandler}
              onClose={this.showCart}
              getCart={this.getCart}
            >
              My Shopping Cart
            </ShoppingCart>
          </div>
        )}

      </div>
    );
  }
}

export default Overview;
