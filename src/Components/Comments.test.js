import React from 'react';
import { shallow } from '../enzymeSetUp';
import { findWithAttribute, storeFactory } from '../testHelpers';
import Comments from './Comments';
import Entry from './Entry';

const setUp = props => {
    const commentsProps = [ ...props];
    const store = storeFactory({ comments : commentsProps});
    const wrapper =  shallow(<Comments store = {store} />).dive();
    return wrapper;
}

describe('<Comments /> renders all elements', () => {
    const wrapper = setUp(['Hello'])
    it('renders without an error', () => {
        const commentsComponent = findWithAttribute(wrapper.dive(), 'comments-component');
        expect(commentsComponent).toHaveLength(1);
    })

    it('renders a heading', () => {
        const commentsHeading = findWithAttribute(wrapper.dive(), 'comments-heading');
        expect(commentsHeading).toHaveLength(1);
    })

    it('renders <Entry />', () => {
        expect(wrapper.dive().find(Entry)).toHaveLength(1);
    })
})

describe('<Component receives right props and renders right element', () => {
    const componentProps = ['Hello', 'Hi', 'Hey']
    const wrapper = setUp(componentProps);

    it('receives the right props from the redux store', () => {
        const receivedProps = wrapper.props().comments;
        expect(receivedProps).toEqual(componentProps)

    })

    it('renders the <Entry /> compnent for each element of "comments" props', () => {
        expect(wrapper.dive().find(Entry)).toHaveLength(componentProps.length)
    })
})