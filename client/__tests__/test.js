import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('renders correctly text component', () => {
    const TextInputComponent = renderer.create(<App />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
  });
});