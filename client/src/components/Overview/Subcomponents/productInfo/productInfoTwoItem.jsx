/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class ProductInfoTwoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { feature, value } = this.props.feature;
    return (
      <div>
        <li>
          Feature:
          {feature}
        </li>
        <li>
          Value:
          {value }
        </li>
      </div>

    );
  }
}

export default ProductInfoTwoItem;
