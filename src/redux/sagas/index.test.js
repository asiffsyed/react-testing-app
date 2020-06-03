import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './index';
import { getPostAction } from '../actions';
import postsSaga from './getPostsSaga';
import getUsersSaga from './getUsersSaga';
import getCommentsSaga from './getCommentsSaga';


const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const store = mockStore({});
sagaMiddleware.run(rootSaga);
const postSagaMock = jest.fn();
postsSaga.getPostsData =
afterAll( () => {
    //'Clearing the actions from the mock store'
})
describe("root saga calls correct generator for corresponding dispatched action", () => {
    test("It calls 'getPostsData' generator when 'GET_POST' action is dispatched", () => {
      store.dispatch({type : 'GET_POST'});

    })

    test("It calls 'getUsersData' generator when 'GET_USER' action is dispatched", () => {

    })

    test("It calls 'getCommentsData' generator when 'GET_COMMENT' action is dispatched", () => {

    })
})