import React from 'react';
import { shallow } from "enzyme";
import {AddInputsContainer} from './AddInputsContainer';
import { debug } from 'cli';



describe('Text Input Container Component', () => {

    it('check that the handler is working and simulate an event also check that the component is built as expected ',   () => {
        const handleChange = jest.fn()
        const wrapper = shallow(
        <AddInputsContainer 
            error={null}
            labelName ='Title'
            inputName ='title'
            placeholder='title...'
            handleChange={handleChange}   />);
        const input = wrapper.find('input');
        const mockEvent = {target: {name:'title', value: 'batman begin' }}
        input.simulate('change', mockEvent);
        expect(handleChange).toBeCalledTimes(1);
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find('label')).toHaveLength(1);
        expect(wrapper.find('label').text()).toEqual('Title');
        expect(handleChange).toHaveBeenCalledWith('title','batman begin');


    })

    it('render a error component when there is an error',   () => {
        const handleChange = jest.fn()
        const wrapper = shallow(
        <AddInputsContainer 
            error={'* Title is not valid, please insert title in English'}
            labelName ='Title'
            inputName ='title'
            placeholder='title...'
            handleChange={handleChange}   />);
        expect(wrapper.find('Error').length).toBe(1);


    })
})
