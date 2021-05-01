/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import Next from './buttons/Next.jsx';
import Prev from './buttons/Prev.jsx';
import NextOutfit from './buttons/NextOutfit.jsx';
import PrevOutfit from './buttons/PrevOutfit.jsx';
import CardStateful from '../card/CardStateful.jsx';
import FirstOutfitCard from '../card/FirstOutfitCard.jsx';
import OutfitCardStateful from '../card/OutfitCardStateful.jsx';
import deserialize from './dataTransformer.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.scrollRef = React.createRef();
    this.scrollOutfitRef = React.createRef();

    this.checkButtons = this.checkButtons.bind(this);
    this.scrollPrev = this.scrollPrev.bind(this);
    this.scrollNext = this.scrollNext.bind(this);

    this.checkOutfitButtons = this.checkOutfitButtons.bind(this);
    this.scrollOutfitPrev = this.scrollOutfitPrev.bind(this);
    this.scrollOutfitNext = this.scrollOutfitNext.bind(this);

    this.state = {
      sortedData: [],
      sortedOutfitData: [],
      modalVisible: false,
      prevVisible: false,
      nextVisible: true,
      prevOutfitVisible: false,
      nextOutfitVisible: true,
      buttonDisable: false,
    };
  }

  componentDidMount() {
    const { data, outfitData } = this.props;
    const newstate = deserialize(data, outfitData);
    this.setState(newstate);
  }

  checkButtons() {
    const { offsetWidth, scrollWidth, scrollLeft } = this.scrollRef.current;
    const prevVisible = scrollLeft !== 0;
    const nextVisible = scrollLeft < (scrollWidth - offsetWidth);
    this.setState({
      prevVisible,
      nextVisible,
    });
  }

  scrollNext() {
    const { scrollWidth } = this.scrollRef.current;
    const { sortedData } = this.state;
    this.setState({
      buttonDisable: true,
    });
    const distance = (scrollWidth / sortedData.length);
    if (this.scrollRef && this.scrollRef.current) {
      this.scrollRef.current.scrollLeft += distance;
    }
    setTimeout(() => {
      this.checkButtons();
      this.setState({
        buttonDisable: false,
      });
    }, 400);
  }

  scrollPrev() {
    const { scrollWidth } = this.scrollRef.current;
    const { sortedData } = this.state;
    this.setState({
      buttonDisable: true,
    });
    const distance = (scrollWidth / sortedData.length);
    if (this.scrollRef && this.scrollRef.current) {
      this.scrollRef.current.scrollLeft -= distance;
    }
    setTimeout(() => {
      this.checkButtons();
      this.setState({
        buttonDisable: false,
      });
    }, 400);
  }

  checkOutfitButtons() {
    const { offsetWidth, scrollWidth, scrollLeft } = this.scrollOutfitRef.current;
    const prevOutfitVisible = scrollLeft !== 0;
    const nextOutfitVisible = scrollLeft < (scrollWidth - offsetWidth);
    this.setState({
      prevOutfitVisible,
      nextOutfitVisible,
    });
  }

  scrollOutfitNext() {
    const { scrollWidth } = this.scrollOutfitRef.current;
    const { sortedData } = this.state;
    this.setState({
      buttonDisable: true,
    });
    const distance = (scrollWidth / (sortedData.length + 2));
    if (this.scrollOutfitRef && this.scrollOutfitRef.current) {
      this.scrollOutfitRef.current.scrollLeft += distance;
    }
    setTimeout(() => {
      this.checkOutfitButtons();
      this.setState({
        buttonDisable: false,
      });
    }, 400);
  }

  scrollOutfitPrev() {
    const { scrollWidth } = this.scrollOutfitRef.current;
    const { sortedData } = this.state;
    this.setState({
      buttonDisable: true,
    });
    const distance = (scrollWidth / (sortedData.length + 2));
    if (this.scrollOutfitRef && this.scrollOutfitRef.current) {
      this.scrollOutfitRef.current.scrollLeft -= distance;
    }
    setTimeout(() => {
      this.checkOutfitButtons();
      this.setState({
        buttonDisable: false,
      });
    }, 400);
  }

  render() {
    const {
      sortedData,
      sortedOutfitData,
      modalVisible,
      prevVisible,
      nextVisible,
      prevOutfitVisible,
      nextOutfitVisible,
      buttonDisable,
      overviewFeatures,
    } = this.state;
    const { name, id } = this.props.data.product;
    const { results } = this.props.data.styles;
    const {
      refreshOutfit, addToOutfit, removeFromOutfit, clickHandler, styles,
    } = this.props;
    const {
      CarouselWrapperDiv, CarouselDiv, OutfitWrapperDiv, OutfitCarouselDiv,
    } = styles;
    return (
      <div>
        <CarouselWrapperDiv>
          {prevVisible ? (
            <Prev
              scroll={this.scrollPrev}
              className={buttonDisable ? 'disabled' : null}
              styles={styles}
            />
          ) : null}
          <CarouselDiv ref={this.scrollRef}>

            {sortedData.map(({
              relatedInformation, relatedStyles, defaultStyle, reviews,
            }) => (
              <CardStateful
                name={relatedInformation.name}
                category={relatedInformation.category}
                defaultPrice={defaultStyle.original_price}
                salePrice={defaultStyle.sale_price}
                image={relatedStyles.results[0].photos[0].thumbnail_url}
                key={relatedInformation.id}
                id={relatedInformation.id}
                modalVisible={modalVisible}
                cardProductFeatures={relatedInformation.features}
                overviewFeatures={overviewFeatures}
                reviews={reviews}
                overviewProduct={name}
                overviewId={id}
                clickHandler={clickHandler}
                styles={styles}
              />
            ))}
          </CarouselDiv>
          {nextVisible ? (
            <Next
              scroll={this.scrollNext}
              className={buttonDisable ? 'disabled' : null}
              styles={styles}
            />
          ) : null}
        </CarouselWrapperDiv>

        <OutfitWrapperDiv>
          {prevOutfitVisible ? (
            <PrevOutfit
              scroll={this.scrollOutfitPrev}
              className={buttonDisable ? 'disabled' : null}
              styles={styles}
            />
          ) : null}
          <OutfitCarouselDiv ref={this.scrollOutfitRef}>
            <FirstOutfitCard
              overviewProduct={name}
              id={id}
              image={results[0].photos[0].thumbnail_url}
              addToOutfit={addToOutfit}
              refreshOutfit={refreshOutfit}
              clickHandler={clickHandler}
              styles={styles}
            />
            {sortedOutfitData.map(({
              outfitInformation, outfitStyles, reviews,
            }) => (
              <OutfitCardStateful
                name={outfitInformation.name}
                category={outfitInformation.category}
                defaultPrice={outfitStyles.results[0].original_price}
                salePrice={outfitStyles.results[0].sale_price}
                image={outfitStyles.results[0].photos[0].thumbnail_url}
                key={outfitInformation.id}
                id={outfitInformation.id}
                cardProductFeatures={outfitInformation.features}
                overviewFeatures={overviewFeatures}
                reviews={reviews.results}
                removeFromOutfit={removeFromOutfit}
                clickHandler={clickHandler}
                styles={styles}
              />
            ))}
          </OutfitCarouselDiv>
          {nextOutfitVisible ? (
            <NextOutfit
              scroll={this.scrollOutfitNext}
              className={buttonDisable ? 'disabled' : null}
              styles={styles}
            />
          ) : null}
        </OutfitWrapperDiv>
      </div>
    );
  }
}

export default Carousel;
