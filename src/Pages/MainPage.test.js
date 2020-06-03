import React from 'react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas';
import { shallow } from '../enzymeSetUp';
import { findWithAttribute, storeFactory } from '../testHelpers';
import MainPage, { UnConnectedMainPage, } from './MainPage';
import ErrorAlert from '../Components/ErrorAlert';
import Spinner from '../Components/Spinner'
import LoadedData from '../Components/LoadedData';
import { getPostAction, getUserAction, getCommentAction } from '../redux/actions';


const setUp = (initialState = {}) => storeFactory(initialState)

describe('renders all elements without an error', () => {
    const wrapper = shallow(<UnConnectedMainPage name = {{fName : 'Hello', lName : 'World'}} />)
    test('renders welcome message', () => {
        const welcomeMessage = findWithAttribute(wrapper, 'welcome-message');
        expect(welcomeMessage).toHaveLength(1);
    })

    test('renders the name from props in the welcome message', () => {
            const welcomeMessage = findWithAttribute(wrapper, 'welcome-message');
            expect(welcomeMessage.text()).toContain('Hello World');
      })

    test('renders a GetUser button', () => {
        const getUserBtn = findWithAttribute(wrapper, 'get-user-button');
        expect(getUserBtn).toHaveLength(1)
    })
    test('renders a GetPost button', () => {
        const getPostBtn = findWithAttribute(wrapper, 'get-post-button');
        expect(getPostBtn).toHaveLength(1)
    })
    test('renders a GetCommnet button', () => {
        const getCommentBtn = findWithAttribute(wrapper, 'get-comment-button');
        expect(getCommentBtn).toHaveLength(1);
    })

    test('renders the error message when the error prop is true', () => {
        wrapper.setProps({error : true});
        expect(wrapper.find(ErrorAlert)).toHaveLength(1);
    })
    test('Does not renders the error message when the error prop is false', () => {
        wrapper.setProps({error : false});
        expect(wrapper.find(ErrorAlert)).toHaveLength(0);
    })

    test('renders the <Spinner /> when the loading prop is true', () => {
        wrapper.setProps({loading : true});
        expect(wrapper.find(Spinner)).toHaveLength(1);

    })
    test('renders the <LoadedData /> when the loading prop is false', () => {
        wrapper.setProps({loading : false});
        expect(wrapper.find(LoadedData)).toHaveLength(1);
    })
})


describe('Connected component receives state from the store as props', () => {
   const initialState = {
        error : true,
        loading : true,
        name : {
            fName : 'Mangal',
            lName : 'Panday'
        }
    }
    const store = setUp(initialState)
    const wrapper = shallow(<MainPage store = { store } />).dive()
    test('receives the error prop from the store', () => {
        expect(wrapper.props().error).toBe(initialState.error);
    })
    test('receives the loading prop from the store', () => {
        expect(wrapper.props().loading).toBe(initialState.loading);
    })
    test('receives the name prop from the store', () => {
        expect(wrapper.props().name).toBe(initialState.name);
    })
})

describe('Connected component receives action creators as props', () => {
    const store = setUp({
                name : {
                    fName : 'Mangal',
                    lName : 'Panday'
                }})
    const wrapper = shallow(<MainPage store = { store } />).dive()
    test('receives the getPost action creator as a prop', () => {
        const getPostAction = wrapper.props().getPost;
        expect(getPostAction).toBeInstanceOf(Function);
    })
    test('receives the getUser action creator as a prop', () => {
        const getUserAction = wrapper.props().getUser;
        expect(getUserAction).toBeInstanceOf(Function);
    })
    test('receives the getComment action creator as prop', () => {
        const getCommentAction = wrapper.props().getComment;
        expect(getCommentAction).toBeInstanceOf(Function);
    })
})

describe('dispatches the corresponding action on the button click', () => {
    const name = {
        fName : 'Sample'
    }
    test('A click event on GetUser button dispatches the getUser action', () => {
        //Creating a mock function
        const getUserActionMock = jest.fn();
        //Assigning a mock function for "getUser" action creator
        const wrapper = shallow(<UnConnectedMainPage name = { name } getUser = { getUserActionMock } />);
        const getUserBtn = findWithAttribute(wrapper, 'get-user-button');
        getUserBtn.simulate('click');
        expect(getUserActionMock.mock.calls.length).toBe(1);
    })

    test('A click event on GetComment button dispatches the getComment action', () => {
        const getCommentActionMock = jest.fn();
        const wrapper = shallow(<UnConnectedMainPage name = { name } getComment = { getCommentActionMock } />);
        const getCommentBtn = findWithAttribute(wrapper, 'get-comment-button');
        getCommentBtn.simulate('click');
        expect(getCommentActionMock.mock.calls.length).toBe(1);
    })

    test('A click event on GetPost button dispatches the getPost action', () => {
        const getPostMockAction = jest.fn();
        const wrapper = shallow(<UnConnectedMainPage name = { name } getPost = { getPostMockAction } />);
        const getPostBtn = findWithAttribute(wrapper, 'get-post-button');
        expect(getPostBtn).toHaveLength(1);
        getPostBtn.simulate('click');
        expect(getPostMockAction.mock.calls.length).toBe(1);
    })
})

describe('Testing the props dispatch an action or not', () => {
    const sagaMiddleware = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleware]);
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const wrapper = shallow(<MainPage store = { store } />).dive();
    afterEach(() => {
        store.clearActions()
    })
    test('getPost action prop dispatches an action', () => {
        wrapper.props().getPost();
        expect(store.getActions()[0]).toEqual(getPostAction());
    })

    test('getUser action prop dispatches an action', () => {
        wrapper.props().getUser();
        expect(store.getActions()[0]).toEqual(getUserAction());
    })

    test('getComment action prop dispatches an action', () => {
        wrapper.props().getComment();
        expect(store.getActions()[0]).toEqual(getCommentAction());
    })

})