import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

import sampleData from '../sampleData';
import QA from './qa';
import QuestionRenderer from './SubComponents/QuestionRenderer';
import AnswerRenderer from './SubComponents/AnswerRenderer';
import lightStyles from './SubComponents/lightStyles';

import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QA
    data={sampleData}
    colorMode="light"
  />, div);
});

it('does not display more questions button if less than four questions are present', () => {
  const { getByTestId } = render(<QA data={sampleData} colorMode="light" />);
  expect(getByTestId('QuestionButtons')).not.toHaveTextContent('More Answered Questions');
});

it('should display an option to add more questions', () => {
  const { getByTestId } = render(<QA data={sampleData} colorMode="light" />);
  expect(getByTestId('QuestionButtons')).toHaveTextContent('Add A Question');
});

it('should display an option to add more answers', () => {
  const { getByTestId } = render(
    <QuestionRenderer
      question={sampleData.qa.results[0]}
      styles={lightStyles}
    />,
  );
  expect(getByTestId('AddAnswer')).toHaveTextContent('Add Answer');
});

it('renders a formatted question line', () => {
  const { getByTestId } = render(
    <QuestionRenderer
      question={sampleData.qa.results[0]}
      styles={lightStyles}
    />,
  );
  expect(getByTestId('QuestionText')).toHaveTextContent('Q: Does this product run big or small?');
});


it('renders a formatted answer line', () => {
  const { getByText } = render(
    <AnswerRenderer
      answers={sampleData.qa.results[1].answers}
      styles={lightStyles}
    />,
  );
  expect(getByText('I\'ve thrown it in the wash and it seems fine')).toHaveTextContent('A: I\'ve thrown it in the wash and it seems fine');
});

it('renders no answers if none are present', () => {
  const { getByTestId } = render(
    <AnswerRenderer
      answers={sampleData.qa.results[0].answers}
      styles={lightStyles}
    />,
  );
  expect(getByTestId('NoAnswer')).toHaveTextContent('No Answers Available for this Question.');
});

it('renders an option to load more answers if more than two are present', () => {
  const { getByTestId } = render(
    <AnswerRenderer
      answers={sampleData.qa.results[1].answers}
      styles={lightStyles}
    />,
  );
  expect(getByTestId('LoadMoreAnswers')).toHaveTextContent('LOAD MORE ANSWERS');
});

it('displays only two answers initially', () => {
  const wrapper = shallow(<AnswerRenderer answers={sampleData.qa.results[1].answers} sort="helpfulness" styles={lightStyles} />);
  expect(wrapper.text()).not.toContain('It says not toby ceasar');
});

it('displays more than two answers when load more answers is clicked', () => {
  const wrapper = shallow(<AnswerRenderer answers={sampleData.qa.results[1].answers} sort="helpfulness" styles={lightStyles} />);
  wrapper.find({ 'data-testid': 'LoadMoreAnswers' }).simulate('click');
  expect(wrapper.text()).toContain('It says not toby ceasar');
});
