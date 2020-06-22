import React from 'react';
import {shallow} from 'enzyme'
import { Layout } from './Layout'

describe('Layout', () => {
    it('should render with a child', () => {
        const wrapper = shallow(<Layout/>)
        expect(wrapper.children.length).toBe(1);
    });
});