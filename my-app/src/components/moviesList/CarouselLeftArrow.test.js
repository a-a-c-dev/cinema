import React from 'react';
import { shallow } from "enzyme";
import {CarouselLeftArrow} from './CarouselLeftArrow';



describe('Carousel Left Arrow Component', () => {

    it('renders button with icon and making sure the function is being called ',   () => {
        const prevMovie = jest.fn()
        const wrapper = shallow(<CarouselLeftArrow prevMovie={prevMovie} />);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(prevMovie).toBeCalledTimes(1);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('i')).toHaveLength(1);

    })
})
