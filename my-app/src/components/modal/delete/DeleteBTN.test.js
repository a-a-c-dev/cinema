import React from 'react';
import {  mount } from "enzyme";
import {DeleteBTN} from './DeleteBTN';



describe('Delete BTN  Component', () => {

    it('making sure the id that been passed is the same Id  ',   () => {
        const wrapper = mount(<DeleteBTN data-movieid={'12345'}/>);
        expect(wrapper.prop('data-movieid')).toEqual('12345');

        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').text()).toEqual('Submit');
    })
})
