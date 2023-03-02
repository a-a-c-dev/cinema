import React from 'react';
import {  mount } from "enzyme";
import {EditBTN} from './EditBTN';



describe('Edit BTN  Component', () => {

    it('renders button with icon and making sure the function is being called  ',   () => {
        const wrapper = mount(<EditBTN data-movieid={'12345'}/>);
        expect(wrapper.prop('data-movieid')).toEqual('12345');

        expect(wrapper.find('button').length).toBe(1);
    })
})
