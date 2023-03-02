import React from 'react';
import Footer  from './Footer';
import { shallow } from "enzyme";

describe("Footer Component", () => {
    const wrapper = shallow(<Footer/>) 
    it("Should have 1 div with className app-footer", () => {

        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div').hasClass("app-footer")).toEqual(true);
    })
    it("Should have 2 p tags with some text", () => {
        expect(wrapper.find('p').length).toBe(2);
    })
})


