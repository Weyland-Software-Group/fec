/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import React from 'react';
import helpers from '../../../Reviews/helpers.js';
import styles from './styles.js';

class ProductInfoOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 0,
      ratingPercentage: 0,
    };

    this.getRating = this.getRating.bind(this);
    this.getRatingPercentage = this.getRatingPercentage.bind(this);
  }

  componentDidMount() {
    this.getRating();
  }

  getRating() {
    const avgRating = helpers.getRating(this.state.avgRating,
      this.props.data.reviews.reviewMeta.ratings);
    this.setState({
      avgRating,
    }, () => this.getRatingPercentage());
  }

  getRatingPercentage() {
    const ratingPercentage = helpers.getRatingPercentage(this.state.avgRating);
    this.setState({
      ratingPercentage,
    });
  }

  render() {
    const { photos, data } = this.props;
    const { original_price, sale_price } = photos;
    const { product } = data;
    const { category, name } = product;

    const starInnerWidth = {
      width: this.state.ratingPercentage,
    };

    return (
      <styles.productInformation>
        <styles.StarsOuterBefore>
          <styles.StarsInnerBefore
            style={{ width: this.state.ratingPercentage }}
          />
        </styles.StarsOuterBefore>
        <a href="#reviews">Read all reviews</a>
        <br />
        <div>
          CATEGORY:
          {category}
        </div>
        <styles.titleSize>{name}</styles.titleSize>
        <div>
          Price: $
          {original_price}
        </div>
        <div>
          {(sale_price)
          && (
          <styles.Rtext>
            Sale: $
            {sale_price}
          </styles.Rtext>
          )}
        </div>
      </styles.productInformation>

    );
  }
}

export default ProductInfoOne;
