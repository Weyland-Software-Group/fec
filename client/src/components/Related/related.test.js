/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import styledLight from './CSS/styledLight.js';
import styledDark from './CSS/styledDark.js';

import relatedSample from './sampleData/relatedSample.js';
import outfitSample from './sampleData/outfitSample.js';
import Related from './related.jsx';
import Carousel from './subcomponents/carousel/Carousel.jsx';
import FirstOutfitCard from './subcomponents/card/FirstOutfitCard.jsx';
import ModalCompare from './subcomponents/card/ModalCompare.jsx';
import OutfitCardStateful from './subcomponents/card/OutfitCardStateful.jsx';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders RELATED without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Related data={relatedSample} outfitData={outfitSample} colorMode="light" />, div);
});

it('renders the carousels with styledLight without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Carousel data={relatedSample} outfitData={outfitSample} colorMode="light" styles={styledLight} />, div);
});

it('renders the carousels with styledDark without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Carousel data={relatedSample} outfitData={outfitSample} colorMode="light" styles={styledDark} />, div);
});

it('renders the Add to Outfit card', () => {
  const { product, styles } = relatedSample;
  const div = document.createElement('div');
  ReactDOM.render(<FirstOutfitCard
    overviewProduct={product.name}
    id={product.id}
    image={styles.results[0].photos[0].thumbnail_url}
    styles={styledLight}
  />, div);
});

it('renders the Comparison Modal', () => {
  const { features, name } = relatedSample.product;

  const configuredFeatures = {};
  features.forEach((item) => {
    configuredFeatures[item.feature] = item.value;
  });

  const tableData = [configuredFeatures];

  const div = document.createElement('div');
  ReactDOM.render(<ModalCompare
    comparisonData={tableData}
    overviewProduct={name}
    name="test card item"
    styles={styledLight}
  />, div);
});

it('renders an Outfit card', () => {
  const { product, styles, reviews } = relatedSample;
  const div = document.createElement('div');
  ReactDOM.render(<OutfitCardStateful
    name={product.name}
    category={product.category}
    defaultPrice={styles.results[0].original_price}
    salePrice={styles.results[0].sale_price}
    image={styles.results[0].photos[0].thumbnail_url}
    key={product.id}
    id={product.id}
    cardProductFeatures={product.features}
    reviews={reviews.reviews.results}
    styles={styledLight}
  />, div);
});
