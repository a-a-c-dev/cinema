import React from 'react';
import {  mount } from "enzyme";
import {EditBTN} from './EditBTN';



describe('Edit BTN  Component', () => {

    it('making sure the id that been passed is the same Id  ',   () => {
        const wrapper = mount(<EditBTN data-movieid={'12345'}/>);
        expect(wrapper.prop('data-movieid')).toEqual('12345');

        expect(wrapper.find('button').length).toBe(1);
    })
})
