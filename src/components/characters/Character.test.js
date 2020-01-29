import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';
import img1 from '../assets/38.jpeg';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character image={img1} name="Beth Smith" id="id: 38" status="Alive" species="Human" gender="Female" origin="Earth (C-137)" lastLocation="Earth (C-137)"/>);
    expect(wrapper).toMatchSnapshot();
  });
});