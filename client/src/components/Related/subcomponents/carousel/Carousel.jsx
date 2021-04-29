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
    const { features } = data.product;
    const {
      relatedIds, relatedInformation, relatedStyles, relatedReviews,
    } = data.related;
    const { outfitInformation, outfitStyles, outfitReviews } = outfitData;
    const newSort = [];
    const newOutfitSort = [];
    for (let i = 0; i < relatedIds.length; i += 1) {
      for (let ii = 0; ii < relatedStyles[i].results.length; ii += 1) {
        if (relatedStyles[i].results[ii]['default?'] === true) {
          newSort.push({
            relatedInformation: relatedInformation[i],
            relatedStyles: relatedStyles[i],
            defaultStyle: relatedStyles[i].results[ii],
            reviews: relatedReviews[i],
          });
          break;
        } else if (ii === relatedStyles[i].results.length - 1 && newSort[i] === undefined) {
          newSort.push({
            relatedInformation: relatedInformation[i],
            relatedStyles: relatedStyles[i],
            defaultStyle: relatedStyles[i].results[0],
            reviews: relatedReviews[i],
          });
        }
      }
    }
    if (outfitInformation) {
      for (let i = 0; i < outfitInformation.length; i += 1) {
        newOutfitSort.push({
          outfitInformation: outfitInformation[i],
          outfitStyles: outfitStyles[i],
          reviews: outfitReviews[i],
        });
      }
    }
    if (outfitInformation === undefined) {
      this.setState({
        sortedData: newSort,
        sortedOutfitData: newOutfitSort,
        overviewFeatures: features,
        nextVisible: relatedInformation.length > 4,
        nextOutfitVisible: false,
      });
    } else {
      this.setState({
        sortedData: newSort,
        sortedOutfitData: newOutfitSort,
        overviewFeatures: features,
        nextVisible: relatedInformation.length > 4,
        nextOutfitVisible: outfitInformation.length > 4,
      });
    }
    // eslint-disable-next-line no-undef
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
    const distance = (scrollWidth / (sortedData.length + 1));
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
    const distance = (scrollWidth / (sortedData.length + 1));
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
    return (
      <div>
        <styles.carouselWrapperDiv>
          {prevVisible ? (
            <Prev
              scroll={this.scrollPrev}
              className={buttonDisable ? 'disabled' : null}
              styles={styles}
            />
          ) : null}
          <styles.carouselDiv ref={this.scrollRef}>

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
          </styles.carouselDiv>
          {nextVisible ? (
            <Next
              scroll={this.scrollNext}
              className={buttonDisable ? 'disabled' : null}
              styles={styles}
            />
          ) : null}
        </styles.carouselWrapperDiv>

        <styles.OutfitWrapperDiv>
          {prevOutfitVisible ? (
            <PrevOutfit
              scroll={this.scrollOutfitPrev}
              className={buttonDisable ? 'disabled' : null}
              styles={styles}
            />
          ) : null}
          <styles.carouselDiv ref={this.scrollOutfitRef}>
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
          </styles.carouselDiv>
          {nextOutfitVisible ? (
            <NextOutfit
              scroll={this.scrollOutfitNext}
              className={buttonDisable ? 'disabled' : null}
              styles={styles}
            />
          ) : null}
        </styles.OutfitWrapperDiv>
      </div>
    );
  }
}

export default Carousel;
