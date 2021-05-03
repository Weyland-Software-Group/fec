/* eslint-disable react/destructuring-assignment */
import React from 'react';
import $ from 'jquery';
import Overview from './Overview/overview.jsx';
import Related from './Related/related.jsx';
import Reviews from './Reviews/reviews.jsx';
import QA from './QA/qa.jsx';
import helpers from './Reviews/helpers.js';

const moment = require('moment');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      overview: false,
      related: false,
      qa: false,
      reviews: false,
      outfitData: [],
      colorMode: 'light',
    };

    this.refreshOutfit = this.refreshOutfit.bind(this);
    this.toggleColorMode = this.toggleColorMode.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.updateRatingPercentage = this.updateRatingPercentage.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const URL = window.location.href;
    const productID = URL.split('products/')[1].split('/')[0];
    const outfitIDs = localStorage.getItem('outfit');
    $.ajax({
      url: `/api/overview/${productID}`,
    })
      .then((responseData) => {
        this.setState({ data: responseData, show: true, overview: true });
        return $.ajax({
          url: `/api/reviews/${productID}`,
        });
      })
      .then((data) => {
        const currentData = this.state.data;
        currentData.reviews = data.reviews;
        this.setState({
          data: currentData,
        }, () => {
          this.setState({
            productID: productID,
            reviews: true,
          });
        });
        return $.ajax({
          url: `/api/qa/${productID}`,
        });
      })
      .then((data) => {
        const currentData = this.state.data;
        currentData.qa = data.qa;
        this.setState({
          data: currentData,
          qa: true,
        });
        return $.ajax({
          url: `/api/related/${productID}`,
        });
      })
      .then((data) => {
        const currentData = this.state.data;
        currentData.related = data.related;
        this.setState({
          data: currentData,
        });
        return $.ajax({
          url: '/outfit',
          type: 'POST',
          data: { outfitIDs },
        });
      })
      .then((data) => {
        this.setState({
          outfitData: data.outfit,
          related: true,
        });
      })
      .catch(() => {
        this.setState({
          related: true,
        });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  clickHandler(element, widget) {
    console.log('click handler:', element, widget);
    const data = {
      element,
      widget,
      time: moment().format(),
    };
    $.ajax({
      url: '/interactions',
      type: 'POST',
      data,
    });
  }

  toggleColorMode() {
    const { colorMode } = this.state;
    if (colorMode === 'light') {
      this.setState({ colorMode: 'dark' });
    } else {
      this.setState({ colorMode: 'light' });
    }
  }

  updateRatingPercentage(percentage) {
    this.setState({ rating: percentage });
  }

  refreshOutfit() {
    const outfitIDs = localStorage.getItem('outfit');
    $.ajax({
      url: '/outfit',
      type: 'POST',
      data: { outfitIDs },
      success: (outfitData) => {
        this.setState({
          outfitData: outfitData.outfit,
          related: true,
          qa: true,
          reviews: true,
        });
      },
      error: (outfitData) => {
        const outfit = { outfitInformation: [], outfitStyles: [], outfitReviews: [] };
        this.setState({
          outfitData: outfit,
          related: true,
          qa: true,
          reviews: true,
        });
      },
    });
  }

  addToOutfit(id) {
    const { outfitData } = this.state;
    const {
      product, styles, reviews,
    } = this.state.data;
    const string = localStorage.getItem('outfit');
    this.currentOutfit = string.split(',');
    if (this.currentOutfit[0] !== '' && this.currentOutfit.indexOf(id.toString()) === -1) {
      this.currentOutfit.push(id.toString());
      localStorage.setItem('outfit', this.currentOutfit);

      const newOutfitData = outfitData;
      const {
        outfitInformation, outfitStyles, outfitReviews,
      } = newOutfitData;

      outfitInformation.push(product);
      outfitStyles.push(styles);
      outfitReviews.push(reviews.reviews);

      this.setState({
        outfitData: newOutfitData,
      });
    } else if (this.currentOutfit[0] === '') {
      localStorage.setItem('outfit', id.toString());
      const newOutfitData = {
        outfitInformation: [],
        outfitStyles: [],
        outfitReviews: [],
      };
      const { outfitInformation, outfitStyles, outfitReviews } = newOutfitData;

      outfitInformation.push(product);
      outfitStyles.push(styles);
      outfitReviews.push(reviews.reviews);

      this.setState({
        outfitData: newOutfitData,
      });
    }
  }

  removeFromOutfit(id) {
    const { outfitData } = this.state;
    const string = localStorage.getItem('outfit');
    this.currentOutfit = string.split(',');
    if (this.currentOutfit.indexOf(id.toString()) !== -1) {
      this.currentOutfit.splice(this.currentOutfit.indexOf(id.toString()), 1);
      localStorage.setItem('outfit', this.currentOutfit);
      let productIndex = -1;
      for (let i = 0; i < outfitData.outfitInformation.length; i += 1) {
        if (id === outfitData.outfitInformation[i].id) {
          productIndex = i;
        }
      }
      const newOutfitData = outfitData;
      newOutfitData.outfitInformation.splice(productIndex, 1);
      newOutfitData.outfitStyles.splice(productIndex, 1);
      newOutfitData.outfitReviews.splice(productIndex, 1);
      this.setState({
        outfitData: newOutfitData,
      });
    }
  }

  render() {
    if (this.state.show === false) {
      return (
        <div>Loading ...</div>
      );
    }
    return (
      <div>
        {this.state.reviews
          ? (
            <Overview
              data={this.state.data}
              key={Math.random() * 1000000}
              outfitData={this.state.outfitData}
              refreshOutfit={this.refreshOutfit}
              addToOutfit={this.addToOutfit}
              toggleColorMode={this.toggleColorMode}
              clickHandler={this.clickHandler}
            />
          )
          : <div />}
        {this.state.reviews
          ? (
            <Reviews
              id="reviews"
              data={this.state.data}
              key={Math.random() * 1000000}
              colorMode={this.state.colorMode}
              clickHandler={this.clickHandler}
            />
          )
          : <div />}
        {this.state.qa
          ? (
            <QA
              data={this.state.data}
              key={Math.random() * 1000000}
              colorMode={this.state.colorMode}
              clickHandler={this.clickHandler}
            />
          )
          : <div />}
        {this.state.related
          ? (
            <Related
              data={this.state.data}
              outfitData={this.state.outfitData}
              addToOutfit={this.addToOutfit}
              removeFromOutfit={this.removeFromOutfit}
              key={Math.random() * 1000000}
              colorMode={this.state.colorMode}
              toggleColorMode={this.toggleColorMode}
              clickHandler={(element) => {
                this.clickHandler(element, 'Related');
              }}
            />
          )
          : <div />}
      </div>
    );
  }
}

export default App;
