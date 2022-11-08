import React from 'react';
import ListHeader from './ListHeader';
import { shallow } from "enzyme";



function renderListHeader(args) {
    const defaultProps = {
        openAddMovieModal: () => { }
    }
    const props = { ...defaultProps, ...args };
    return shallow(<ListHeader{...props} />)
}

it('should render one <nav/>', () => {
    const wrapper = renderListHeader();
    expect(wrapper.find("span").text()).toEqual("");

});

describe('List Header Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<ListHeader />);
    })
    it('renders nav and span with icon  ', () => {
        expect(wrapper.find('nav').length).toBe(1);
        expect(wrapper.find('i').length).toBe(1);
    })
})
