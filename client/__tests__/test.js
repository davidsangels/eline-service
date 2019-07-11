import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug/>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<App list={strings} />);
    expect(component).toMatchSnapshot();
  });
});