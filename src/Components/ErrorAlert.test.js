import React from 'react';
import { Alert } from 'react-bootstrap';
import ErrorAlert from './ErrorAlert';
import { shallow } from '../enzymeSetUp';
import { findWithAttribute } from '../testHelpers'

describe('<ErrorAlert />', () => {
    let wrapper = shallow(<ErrorAlert />);
    it('renders without error', () => {
        const errorAlertComponent = findWithAttribute(wrapper, 'error-alert-component');
        expect(errorAlertComponent).toHaveLength(1)
    });

    it('contains <Alert /> component from React-Bootstrap', () => {
        expect(wrapper.find(Alert)).toHaveLength(1)
    })
})
