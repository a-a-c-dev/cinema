import React from 'react';
import {ListHeader} from './ListHeader';
import { shallow } from "enzyme";



describe('List Header Component', () => {
    const wrapper = shallow(<ListHeader />);

    it('renders nav and span with icon  ', () => {
        expect(wrapper.find('.navbar').length).toBe(1);
        expect(wrapper.find('.icon-container').length).toBe(1);
    })
})
