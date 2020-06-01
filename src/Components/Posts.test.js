import React from 'react';
import { shallow } from '../enzymeSetUp';
import { findWithAttribute, storeFactory } from '../testHelpers';
import Posts from './Posts';
import Entry from './Entry';

const setUp = props => {
    const store = storeFactory({ posts : [...props] });
    return shallow(<Posts store = { store } />).dive().dive()
}

describe('<Posts /> renders without an error', () => {
    const wrapper = setUp(['Hello'])
    it('renders without an error', () => {
        const postsComponent = findWithAttribute(wrapper, 'posts-component')
        expect(postsComponent).toHaveLength(1)
    })

    it('renders the heading without an error', () => {
        const postsHeading = findWithAttribute(wrapper, 'posts-heading')
        expect(postsHeading).toHaveLength(1)
    })

    it('renders the <Entry /> without an error', () => {
       expect(wrapper.find(Entry)).toHaveLength(1)
    })
})

describe('<Posts /> receives right props from store', () => {
    const postsProps = ['trains', 'party', 'drink']
    const store = storeFactory({ posts : postsProps })
    const wrapper = shallow(<Posts store = { store } />).dive()

    it('receives the right props from the store', () => {
        const recievedProps = wrapper.props().posts
        expect(recievedProps).toEqual(postsProps);
    })
})