import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import rootSaga, { beforeApiCall, apiCall, afterSuccessApiCall, afterFailedApiCall, getPostsData, getUsersData, getCommentsData  } from './sagas';
import actionTypes from '../actionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const store = mockStore({});
sagaMiddleware.run(rootSaga);

describe('Saga helper generators dispatch right actions', () => {
    test('beforeApiCall dispatches "loading" and "noError" actions', () => {

    })
    test('afterSuccessApiCall dispatches "addPost", "addUser", or "addComment" depends on given time and "loaded" actions', () => {

    })
    test('afterFailedApiCall dispatches "error" and "loaded" actions', () => {

    })
})

describe("getUsersData calls right helper functions with right arguments", () => {
    test("it calls 'beforeApiCall'", () => {

    })

    test("It calls 'apiCall' with right url", () => {

    })

    test('It calls "afterSuccessApiCall" with right action type and data from "apiCall" function', () => {

    })
})
describe("getPostsData calls right helper functions with right arguments", () => {
    test("it calls 'beforeApiCall'", () => {

    })

    test("It calls 'apiCall' with right url", () => {

    })

    test('It calls "afterSuccessApiCall" with right action type and data from "apiCall" function', () => {

    })
})
describe("getCommentsData calls right helper functions with right arguments", () => {
    test("it calls 'beforeApiCall'", () => {

    })

    test("It calls 'apiCall' with right url", () => {

    })

    test('It calls "afterSuccessApiCall" with right action type and data from "apiCall" function', () => {

    })
})

describe("root saga calls correct generator for corresponding dispatched action", () => {
    test("It calls 'getPostsData' generator when 'GET_POST' action is dispatched", () => {

    })

    test("It calls 'getUsersData' generator when 'GET_USER' action is dispatched", () => {

    })

    test("It calls 'getCommentsData' generator when 'GET_COMMENT' action is dispatched", () => {

    })
})