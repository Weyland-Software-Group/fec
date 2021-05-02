/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './imageGallery.jsx';
import sampleData from '../../../sampleData.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageGallery data={sampleData} />, div);
});
