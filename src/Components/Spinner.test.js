import React from 'react';
import { Spinner } from 'react-bootstrap';
import LoadingSpinner from './Spinner';
import { shallow } from '../enzymeSetUp';
import { findWithAttribute } from '../testHelpers';


describe('<LoadingSpinner />', () => {
    const wrapper = shallow(<LoadingSpinner />)
    it('renders without error', () => {
        const loadingSpinnerComponent = findWithAttribute(wrapper, 'spinner-component')
        expect(loadingSpinnerComponent).toHaveLength(1);
    })

    it('renders a heading', () => {
        const spinnerHeading = findWithAttribute(wrapper, 'spinner-heading');
        expect(spinnerHeading).toHaveLength(1);
    })

    it('renders a <Spinner /> from "React-Bootstrap"', () => {
        expect(wrapper.find(Spinner)).toHaveLength(1);
    })
})