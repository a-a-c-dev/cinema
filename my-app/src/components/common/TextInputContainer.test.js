import React from 'react';
import { shallow } from "enzyme";
import {TextInputContainer} from './TextInputContainer';



describe('Text Input Container Component', () => {

    it('check that the handler is working and simulate an event also check that the component is built as expected ',   () => {
        const handleChange = jest.fn()
        const wrapper = shallow(
        <TextInputContainer 
            labelName ='Title'
            labelValue='The Dark knight'
            inputName ='title'
            placeholder='title...'
            handleChange={handleChange}   />);
        const input = wrapper.find('input');
        const mockEvent = {target: {name:'title', value: 'batman begin' }}
        input.simulate('change', mockEvent);
        expect(handleChange).toBeCalledTimes(1);
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find('label')).toHaveLength(1);
        expect(wrapper.find('label').text()).toEqual('Title: The Dark knight');;
        expect(handleChange).toHaveBeenCalledWith(mockEvent);


    })
})
