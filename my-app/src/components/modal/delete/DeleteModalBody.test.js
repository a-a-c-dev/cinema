import React from "react";
import { shallow } from "enzyme";
import {DeleteModalBody} from './DeleteModalBody'


describe('Delete modal body component ', () => {
    it('should check title props, and element on the page ', ()=>{
        const wrapper = shallow(<DeleteModalBody title='limitless'/>)
        expect(wrapper.find('div').length).toBe(1)
        expect(wrapper.find('p').length).toBe(1)
        expect(wrapper.find("p").text()).toEqual("Are you sure, you would like to delete the movie limitless?");
    })
})