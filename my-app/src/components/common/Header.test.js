import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe("Header Component", () => {
    const wrapper = shallow(<Header />);

    it("should have one div with class of app-header and one h1 containing the word cinema", () => {
        expect(wrapper.find('.app-header')).toHaveLength(1);
        expect(wrapper.find('.app-header-txt-container')).toHaveLength(1);
        expect(wrapper.find("h1")).toHaveLength(1);
        expect(wrapper.find("h1").text()).toEqual("A.A.C cinema");
        expect(wrapper.find("h2").text()).toEqual("Personal movies Library");
    });
});