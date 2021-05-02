import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

import sampleData from '../../sampleData';
import QuestionRenderer from './QuestionRenderer';
import lightStyles from './lightStyles';

import '@testing-library/jest-dom/extend-expect';

it('should make an ajax call when a question is marked as helpful', () => {
  const ajaxSpy = jest.spyOn($, 'ajax');
  const wrapper = shallow(<QuestionRenderer
    question={sampleData.qa.results[0]}
    styles={lightStyles}
  />);
  wrapper.find({ 'data-testid': 'QuestionHelpful' }).simulate('click');
  expect(ajaxSpy).toHaveBeenCalled();
});

it('should make an ajax call when a question is marked as helpful', () => {
  const ajaxSpy = jest.spyOn($, 'ajax');
  const wrapper = shallow(<QuestionRenderer
    question={sampleData.qa.results[0]}
    styles={lightStyles}
  />);
  wrapper.find({ 'data-testid': 'QuestionReport' }).simulate('click');
  expect(ajaxSpy).toHaveBeenCalled();
});
