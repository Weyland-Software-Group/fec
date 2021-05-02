import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount, render } from 'enzyme';

import NewQuestion from './NewQuestion';
import lightStyles from '../lightStyles';
import sampleData from '../../../sampleData';

import '@testing-library/jest-dom/extend-expect';

it('should not show an add answer modal if show is set to false', () => {
  const wrapper = shallow(<NewQuestion show={false}/>);
  expect(wrapper.text()).toBe('');
});

it('should show an add answer modal if show is set to true', () => {
  const wrapper = shallow(<NewQuestion show={true} styles={lightStyles}  productInformation={{data: {product: {name: 'Camo Onesie'}}}} questionInformation={sampleData.qa.results[0]}/>);
  expect(wrapper.text()).not.toBe('');
});

it('should show the product\'s title', () => {
  const wrapper = shallow(<NewQuestion show={true} styles={lightStyles}  productInformation={{data: {product: {name: 'Camo Onesie'}}}} questionInformation={sampleData.qa.results[0]}/>);
  expect(wrapper.text()).toContain('Camo Onesie');
});

it('should show an error message if submission is attempted without required materials', () => {
  const wrapper = shallow(<NewQuestion show={true} styles={lightStyles}  productInformation={{data: {product: {name: 'Camo Onesie'}}}} questionInformation={sampleData.qa.results[0]}/>);
  wrapper.find({ 'data-testid': 'SubmitQuestion' }).simulate('click');
  expect(wrapper.text()).toContain('You must enter the following');
});


it('should not show an error message if email is properly entered', () => {
  const wrapper = shallow(<NewQuestion show={true} styles={lightStyles}  productInformation={{data: {product: {name: 'Camo Onesie'}}}} questionInformation={sampleData.qa.results[0]}/>);
  wrapper.find({ 'data-testid': 'Email' }).simulate('change', { target: { value: 'blahblah@gmail.com'}});
  wrapper.find({ 'data-testid': 'SubmitQuestion' }).simulate('click');
  expect(wrapper.find({ 'data-testid': 'WarningText' }).text()).not.toContain('email');
});

it('should not show an error message if all fields are properly entered', () => {
  const wrapper = shallow(<NewQuestion show={true} styles={lightStyles}  productInformation={{data: {product: {name: 'Camo Onesie'}}}} questionInformation={sampleData.qa.results[0]}/>);
  wrapper.find({ 'data-testid': 'Nick' }).simulate('change', { target: { value: 'blahblah'}});
  wrapper.find({ 'data-testid': 'QuestionText' }).simulate('change', { target: { value: 'blahblah'}});
  wrapper.find({ 'data-testid': 'Email' }).simulate('change', { target: { value: 'blahblah@gmail.com'}});
  wrapper.find({ 'data-testid': 'SubmitQuestion' }).simulate('click');
  expect(wrapper.find({ 'data-testid': 'WarningText' }).text()).not.toContain('email');
});
