import React from 'react';
import { shallow } from "enzyme";
import {CarouselRightArrow} from './CarouselRightArrow';



describe('Carousel Right Arrow Component', () => {

    it('renders button with icon and making sure the function is being called  ',   () => {
        const nextMovie = jest.fn()
        const wrapper = shallow(<CarouselRightArrow nextMovie={nextMovie} />);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(nextMovie).toBeCalledTimes(1);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('i')).toHaveLength(1);

    })
})
