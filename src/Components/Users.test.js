import React from 'react';
import { shallow } from '../enzymeSetUp';
import { findWithAttribute, storeFactory } from '../testHelpers';
import Users from './Users';
import Entry from './Entry';

const setUp = props => {
    const commentsProps = [ ...props];
    const store = storeFactory({ users : commentsProps});
    const wrapper =  shallow(<Users store = {store} />).dive();
    return wrapper;
}

describe('<Users /> renders all elements', () => {
    const wrapper = setUp(['Hello'])
    it('renders without an error', () => {
        const commentsComponent = findWithAttribute(wrapper.dive(), 'users-component');
        expect(commentsComponent).toHaveLength(1);
    })

    it('renders a heading', () => {
        const commentsHeading = findWithAttribute(wrapper.dive(), 'users-heading');
        expect(commentsHeading).toHaveLength(1);
    })

    it('renders <Entry />', () => {
        expect(wrapper.dive().find(Entry)).toHaveLength(1);
    })
})

describe('<Users receives right props and renders right element', () => {
    const usersProps = ['Hello', 'Hi', 'Hey']
    const wrapper = setUp(usersProps);

    it('receives the right props from the redux store', () => {
        const receivedProps = wrapper.props().users;
        expect(receivedProps).toEqual(usersProps)

    })

    it('renders the <Entry /> compnent for each element of "comments" props', () => {
        expect(wrapper.dive().find(Entry)).toHaveLength(usersProps.length)
    })
})