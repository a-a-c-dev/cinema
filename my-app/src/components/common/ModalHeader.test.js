import React from 'react';
import { shallow } from "enzyme";
import {ModalHeader} from './ModalHeader';



describe('Modal Header Component', () => {
    it('renders button and title text and making sure the function is being called ',   () => {
        const handleClose = jest.fn()
        const wrapper = shallow(<ModalHeader handleClose={handleClose}  title='close'/>);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(handleClose).toBeCalledTimes(1);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('h2').text()).toEqual('close ');;        

    })
})
