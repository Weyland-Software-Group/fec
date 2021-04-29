/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ModalCompare from './ModalCompare.jsx';
import Stars from './Stars.jsx';

class CardStateful extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.sortModalData = this.sortModalData.bind(this);
    this.calculateReviews = this.calculateReviews.bind(this);

    this.state = {
      modalVisible: false,
      starMap: [],
    };
  }

  componentDidMount() {
    this.sortModalData();
    this.calculateReviews();
  }

  toggleModal() {
    const { modalVisible } = this.state;
    if (modalVisible === true) {
      this.setState({ modalVisible: false });
    } else {
      this.setState({ modalVisible: true });
    }
  }

  sortModalData() {
    const {
      overviewFeatures,
      cardProductFeatures,
    } = this.props;

    const dataForTable = [];

    overviewFeatures.forEach((item) => {
      dataForTable.push({ featureToCompare: item.feature, overviewValue: item.value });
    });

    for (let i = 0; i < dataForTable.length; i += 1) {
      cardProductFeatures.forEach((cardItem) => {
        if (cardItem.feature === dataForTable[i].featureToCompare) {
          dataForTable[i].cardValue = cardItem.value;
        }
      });
    }

    cardProductFeatures.forEach((cardItem) => {
      let unique = true;
      for (let i = 0; i < dataForTable.length; i += 1) {
        if (cardItem.feature === dataForTable[i].featureToCompare) {
          unique = false;
        }
      }
      if (unique === true) {
        dataForTable.push({ featureToCompare: cardItem.feature, cardValue: cardItem.value });
      }
    });

    this.setState({
      comparisonData: dataForTable,
    });
  }

  calculateReviews() {
    const { reviews } = this.props;
    const reviewCollection = reviews.results;
    let sum = 0;
    for (let i = 0; i < reviewCollection.length; i += 1) {
      sum += reviewCollection[i].rating;
    }
    const average = sum / reviewCollection.length;
    const rawDecimal = average - Math.floor(average);
    const whole = average - rawDecimal;
    // eslint-disable-next-line radix
    const decimal = parseFloat(rawDecimal.toFixed(2));
    const newStarMap = [];
    let decimalPushed = false;
    for (let i = 0; i < 5; i += 1) {
      if (i < whole) {
        newStarMap.push(1);
      } else if (i === whole && decimalPushed === false) {
        newStarMap.push(decimal);
        decimalPushed = true;
      } else if (decimalPushed === true) {
        newStarMap.push(0);
      }
    }
    // if (newStarMap.length === 0) {
    //   newStarMap = [0, 0, 0, 0, 0];
    // }
    this.setState({
      starMap: newStarMap,
      reviewCount: reviewCollection.length,
    });
  }

  render() {
    const {
      name,
      category,
      defaultPrice,
      salePrice,
      image,
      id,
      overviewProduct,
      overviewId,
      clickHandler,
      styles,
    } = this.props;

    const {
      modalVisible, comparisonData, starMap, reviewCount,
    } = this.state;
    return (
      <styles.cardComponentDiv>
        <i
          className="fas fa-star fa-5x"
          id="starModalButton"
          onClick={() => {
            this.toggleModal();
            clickHandler(`comparing: ${overviewProduct} id: ${overviewId} || ${name} id: ${id}`);
          }}
        />
        <br />
        <styles.a id="a" href={`/products/${id}/`} onClick={() => { clickHandler(`nav to product page: ${name} id: ${id}`); }}>
          <span>{name}</span>
          <br />
          {salePrice ? (
            <div id="salePriceText">
              <styles.salePrice>{`$${salePrice}`}</styles.salePrice>
              <styles.defaultPriceStrike>{`$${defaultPrice}`}</styles.defaultPriceStrike>
            </div>
          ) : <span>{`$${defaultPrice}`}</span>}
          <styles.cardImg src={image} alt="" />
          <br />
        </styles.a>
        {starMap.length > 0 ? (
          <Stars
            starMap={starMap}
            reviewCount={reviewCount}
            id={id}
          />
        ) : null}
        <span>{category}</span>
        { modalVisible ? (
          <ModalCompare
            toggleModal={this.toggleModal}
            comparisonData={comparisonData}
            overviewProduct={overviewProduct}
            name={name}
            styles={styles}
          />
        ) : null}
      </styles.cardComponentDiv>
    );
  }
}
export default CardStateful;
