import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import sampleData from '../sampleData';
import Reviews from './reviews.jsx';
import RatingsReviews from './ratings-reviews.jsx';
import MoreReviews from './more-reviews.jsx';
import AddReview from './add-review.jsx';

afterEach(cleanup);

it('renders reviews to the dom', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews data={sampleData} />, div);
});

it('renders "More-Reviews Button to the dom correctly', () => {
  const { getByTestId } = render(<MoreReviews />);
  expect(getByTestId('more-reviews')).toHaveTextContent('More Reviews');
});

it('matches snapshot', () => {
  const tree = renderer.create(<MoreReviews />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders "More-Reviews Button to the dom correctly', () => {
  const { getByTestId } = render(<AddReview data={sampleData} />);
  expect(getByTestId('add-review')).toHaveTextContent('Add Review');
});

it('matches snapshot', () => {
  const tree = renderer.create(<AddReview data={sampleData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders only two reviews by default', () => {
  const component = renderer.create(<Reviews data={sampleData} />).getInstance();
  expect(component.state.showPosts).toBe(2);
});

it('renders two more review posts when "More Reviews" is clicked', () => {
  const component = mount(<Reviews data={sampleData} />);
  component.find('.more-reviews').simulate('click');

  expect(component.state('showPosts')).toBe(4);

  component.unmount();
});
