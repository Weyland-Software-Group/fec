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
    const { AddToOutfitCard, A, AddToOutfitImg } = styles;
    return (
      <AddToOutfitCard>
        <A onClick={() => { addToOutfit(id); clickHandler(`added to outfit: ${overviewProduct} id: ${id}`); }} id="addToOutfit">
          <i className="fas fa-plus fa-5x" id="plusIcon" />
          <div id="addToOutfitText">
            {`Add ${overviewProduct} to your Outfit.`}
          </div>
          <AddToOutfitImg src={image} alt="" />
          <br />
        </A>
      </AddToOutfitCard>
    );
  }
}
export default FirstOutfitCard;
