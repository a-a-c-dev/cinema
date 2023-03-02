import React from 'react';
import { shallow } from "enzyme";
import {CloseFooterModalBtn} from './CloseFooterModalBtn';



describe('Close Footer Modal Btn Component', () => {
    it('renders button with text props and making sure the function is being called ',   () => {
        const handleClose = jest.fn()
        const wrapper = shallow(<CloseFooterModalBtn handleClose={handleClose}  text='close'/>);
        const button = wrapper.find('button');
        button.simulate('click');
        expect(handleClose).toBeCalledTimes(1);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').text()).toEqual('close');;        

    })
})
