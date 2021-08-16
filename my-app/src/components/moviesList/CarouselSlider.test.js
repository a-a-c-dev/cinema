import React from 'react';
import { shallow } from 'enzyme';
import  CarouselSlider from './CarouselSlider';


describe('List component', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<CarouselSlider debug />);
        expect(component).toMatchSnapshot();
    });
});