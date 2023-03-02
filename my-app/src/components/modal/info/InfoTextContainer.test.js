import React from 'react';
import { shallow } from 'enzyme';
import {InfoTextContainer} from './InfoTextContainer';


describe("Info Text Container Component", () => {
    const wrapper = shallow(<InfoTextContainer label={'title:'} text={'The dark knight'} className={'Info-text-container'} />);

    it("should have two span, and label,text props", () => {  
        expect(wrapper.find("span")).toHaveLength(2);
        expect(wrapper.find("span > span").text()).toEqual("title:");
        expect(wrapper.text()).toEqual('title: The dark knight');
        expect(wrapper.hasClass('Info-text-container')).toEqual(true);
    })
});