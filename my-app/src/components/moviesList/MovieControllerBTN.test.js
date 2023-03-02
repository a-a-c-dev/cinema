import React from 'react';
import { shallow } from "enzyme";
import {MovieControllerBTN} from './MovieControllerBTN';



describe('Movie Controller BTN Component', () => {

    it('renders button with icon with the right className and making sure the function is being called  ',   () => {
        const btnFunction = jest.fn()
        const wrapper = shallow(<MovieControllerBTN btnFunction={btnFunction} movie={{title:'batman', year:2004}} IconClassName='fa fa'/>);
        const button = wrapper.find('button');
        button.simulate('click'); 
        expect(btnFunction).toBeCalledTimes(1);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('i')).toHaveLength(1);
        expect(wrapper.find('i').hasClass('fa fa')).toEqual(true);

    })
})
