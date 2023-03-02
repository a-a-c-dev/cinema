import React from 'react';
import { shallow } from 'enzyme';
import {MovieTextContainer} from './MovieTextContainer';


describe("Movie Text Container component", () => {
    const wrapper = shallow(<MovieTextContainer  text='the dark knight' label='title:'/>);

    it("should have two span, one with the label prop, and one with the text prop", () => {+
        expect(wrapper.find("span")).toHaveLength(2);
        expect(wrapper.find("span > span").text()).toEqual("title:");
        expect(wrapper.text()).toEqual('title:the dark knight');
    });
});