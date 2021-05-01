import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import sampleData from '../sampleData';

import '@testing-library/jest-dom/extend-expect';

it('renders to the dom', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews data={sampleData} />, div);
});