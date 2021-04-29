/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

class FirstOutfitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      overviewProduct, image, id, addToOutfit, clickHandler, styles,
    } = this.props;
    return (
      <styles.outfitCardComponentDiv>
        <styles.a onClick={() => { addToOutfit(id); clickHandler(`added to outfit: ${overviewProduct} id: ${id}`); }} id="addToOutfit">
          <br />
          <i className="fas fa-plus fa-8x" />
          <br />
          <styles.cardImg src={image} alt="" />
          <br />
          Click here to add
          {' '}
          {overviewProduct}
          {' '}
          to your Outfit.
        </styles.a>
      </styles.outfitCardComponentDiv>
    );
  }
}
export default FirstOutfitCard;
