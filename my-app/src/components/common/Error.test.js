import React from 'react';
import { shallow } from "enzyme";
import {Error} from './Error';



describe('Error Component', () => {
    it('renders div with text props and the right className ',   () => {
        const wrapper = shallow(<Error  error='Movie was not found'/>);
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div').text()).toEqual('Movie was not found');
        expect(wrapper.hasClass('validation-alert')).toEqual(true);

    })
})
