/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import AddToCart from './addToCart.jsx';
import sampleData from '../../../sampleData.js';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddToCart data={sampleData} />, div);
});

// xit('display', () => {
//   const test = shallow(<AnswerRenderer answers={sampleData.qa.reqults[1].answers} />);
//   test.find({ 'data-testid': 'LoadMoreAnswers' });
//   simulate('click');
//   expect(test.text()).toContain('fdkfjkdjfk');
// });
