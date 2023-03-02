import React from 'react';
import { shallow } from 'enzyme';
import {InfoMovieTitle} from './InfoMovieTitle';


describe("Info Movie Title Component", () => {
    const wrapper = shallow(<InfoMovieTitle title="The dark knight" />);
    it("should have an header, and a title prop", () => {  
        expect(wrapper.find("h3")).toHaveLength(1);
        expect(wrapper.text()).toEqual('The dark knight');
    })
});