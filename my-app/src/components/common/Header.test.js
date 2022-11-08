import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    })
    it("should have one div with class of app-header  and on h1 containing the word cinema", () => {
        expect(wrapper.find("div").length).toBe(1);
        expect(wrapper.find('div').hasClass("app-header")).toEqual(true);
        expect(wrapper.find("h1").length).toBe(1);
        expect(wrapper.find("div").text()).toEqual("Cenima");
    })
})