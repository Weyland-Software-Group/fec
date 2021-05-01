import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import sampleData from '../sampleData';
<<<<<<< HEAD
import Reviews from './reviews.jsx';
import RatingsReviews from './ratings-reviews.jsx';
import MoreReviews from './more-reviews.jsx';
import AddReview from './add-review.jsx';
=======
>>>>>>> updates to tests

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

// it('renders only two reviews by default', () => {
//   const { getByTestId } = render(<Reviews data={sampleData} />);
//   expect(getByTestId('reviews'));
// });


// describe('Reviews', () => {
//   it('renders more reviews when "more reviews" btn is clicked', () => {

//   });
// });