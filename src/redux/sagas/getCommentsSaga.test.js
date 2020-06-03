import configureStore from 'redux-mock-store';
import createSagaMiddleware, { runSaga } from 'redux-saga';
import getCommentsSaga from './getCommentsSaga';
import apiCalls from '../../apiCalls';
import actionTypes from '../actionTypes';

//Url for API call
const url = "https://jsonplaceholder.typicode.com/comments"

//Mock Store setup
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const store = mockStore({});

//Dummy data for Api response
const response = {
    data : 'Hello'
}


test("Saga work flow when the API request is success'", async () => {
    //Mocking API getData function
    const apiCallMock= jest.fn(() => Promise.resolve(response));
    apiCalls.getData = apiCallMock;
    await  runSaga(store, getCommentsSaga);
    //First dispatches a spinner
    expect(store.getActions()[0]).toEqual({ type : actionTypes.loading});
    //Resets the error to false
    expect(store.getActions()[1]).toEqual({ type : actionTypes.noError});
    //Makes an API call
    expect(apiCallMock.mock.calls.length).toBe(1);
    expect(apiCallMock).toHaveBeenCalledWith(url);
    //Calls addComment Action
    expect(store.getActions()[2]).toEqual({ type: actionTypes.addComment, payload : response });
        //Stops the spinner
    expect(store.getActions()[3]).toEqual({ type : actionTypes.loaded});
})

test("Saga work flow when the API request is failed", async () => {
    const apiCallMock= jest.fn(() => Promise.reject('Something went wrong'));
    apiCalls.getData = apiCallMock;
    await  runSaga(store, getCommentsSaga);
        //First dispatches a spinner
        expect(store.getActions()[0]).toEqual({ type : actionTypes.loading});
        //Resets the error to false
        expect(store.getActions()[1]).toEqual({ type : actionTypes.noError});
        //Makes an API call
        expect(apiCallMock.mock.calls.length).toBe(1);
        expect(apiCallMock).toHaveBeenCalledWith(url);
        //Calls error Action
        expect(store.getActions()[2]).toEqual({ type: actionTypes.error });
        //Stops the spinner
        expect(store.getActions()[3]).toEqual({ type : actionTypes.loaded});

})

afterEach(() => {
    jest.clearAllMocks();
    store.clearActions();
})

