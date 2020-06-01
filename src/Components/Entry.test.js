import React from 'react';
import { shallow } from '../enzymeSetUp';
import Entry from './Entry';
import { findWithAttribute } from '../testHelpers'

describe('<Entry />', () => {
    const wrapper = shallow(<Entry entry = "sample-test"/>)
    test('<Entry /> renders without an error', () => {
        const entryComponent = findWithAttribute(wrapper, 'component-entry')
        expect(entryComponent).toHaveLength(1);
    })

    test('<Entry /> renders the given props', () => {
        const sampleProps = 'Sample Props'
        wrapper.setProps({entry : sampleProps });
        const entryComponent = findWithAttribute(wrapper, 'component-entry')
        expect(entryComponent.text()).toContain(sampleProps)
    })
})