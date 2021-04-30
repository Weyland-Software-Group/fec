/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import relatedSample from './sampleData/relatedSample.js';
import outfitSample from '../sampleData/outfitSample.js';
import Related from '../related.jsx';
import Carousel from '../subcomponents/carousel/Carousel.jsx';

import '@testing-library/jest-dom/extend-expect';

it('renders RELATED without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Related data={relatedSample} outfitData={outfitSample} colorMode="light" />, div);
});
