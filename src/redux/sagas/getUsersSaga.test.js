import configureStore from 'redux-mock-store';
import createSagaMiddleware, { runSaga } from 'redux-saga';
import getUsersSaga from './getPostsSaga';
import apiCalls from '../../apiCalls';
import actionTypes from '../actionTypes';

//Url for the API call
const url = "https://jsonplaceholder.typicode.com/posts";

//Dummy data for API response
const response = {
    data : 'Hello'
}

//Mock Store setup
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const store = mockStore({});


test('getPostsSaga work flow when the API call is success', async () => {
    //Mocking successful API call
    const mockApiCall = jest.fn(() => Promise.resolve(response));
    apiCalls.getData = mockApiCall
    await runSaga(store, getUsersSaga);
    //Dispatches a spinner
    expect(store.getActions()[0]).toEqual({ type : actionTypes.loading });
    //resets the error
    expect(store.getActions()[1]).toEqual({ type : actionTypes.noError });
    //Makes a call to the API
    expect(mockApiCall.mock.calls.length).toBe(1);
    expect(mockApiCall).toHaveBeenCalledWith(url);
    //Dispatches addPost action
    expect(store.getActions()[2]).toEqual({ type : actionTypes.addPost, payload : response });
    //Stops the spinner
    expect(store.getActions()[3]).toEqual({ type : actionTypes.loaded });
})

test('getPostsSaga work flow when the API call is failed', async () => {
    //Mocking successful API call
    const mockApiCall = jest.fn(() => Promise.reject("Something went wrong"));
    apiCalls.getData = mockApiCall
    await runSaga(store, getUsersSaga);
    //Dispatches a spinner
    expect(store.getActions()[0]).toEqual({ type : actionTypes.loading });
    //resets the error
    expect(store.getActions()[1]).toEqual({ type : actionTypes.noError });
    //Makes a call to the API
    expect(mockApiCall.mock.calls.length).toBe(1);
    expect(mockApiCall).toHaveBeenCalledWith(url);
    //Dispatches erro action
    expect(store.getActions()[2]).toEqual({ type : actionTypes.error });
    //Stops the spinner
    expect(store.getActions()[3]).toEqual({ type : actionTypes.loaded });
})

afterEach(() => {
    jest.clearAllMocks();
    store.clearActions();
})