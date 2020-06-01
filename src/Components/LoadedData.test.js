import React from 'react';
import { shallow } from '../enzymeSetUp';
import { findWithAttribute } from '../testHelpers';
import LoadedData from './LoadedData';
import Posts from './Posts'
import Users from './Users'
import Comments from './Comments'

describe('<LoadedData', () => {
    const wrapper = shallow( <LoadedData /> );
    it('renders without an error', () => {
        const loadedDataComponent = findWithAttribute(wrapper, 'loaded-data-component');
        expect(loadedDataComponent).toHaveLength(1);
    })

    it('renders <Users />', () => {
        expect(wrapper.find(Users)).toHaveLength(1)
    })

    it('renders <Posts />', () => {
        expect(wrapper.find(Posts)).toHaveLength(1)
    })

    it('renders <Comments />', () => {
        expect(wrapper.find(Comments)).toHaveLength(1)
    })
})