import React from 'react';
import { shallow } from "enzyme";
import {ListControllerBTN} from './ListControllerBTN';



describe('List Controller BTN Component', () => {

    it('renders button with icon and making sure the function is being called  ',   () => {
        const openAddMovieModal = jest.fn()
        const wrapper = shallow(<ListControllerBTN openAddMovieModal={openAddMovieModal} />);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(openAddMovieModal).toBeCalledTimes(1);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('i')).toHaveLength(1);

    })
})
