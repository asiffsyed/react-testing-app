import { put } from 'redux-saga/effects';
import { beforeApiCall, afterSuccessApiCall, afterFailedApiCall } from './helperSagas';
import actionTypes from '../actionTypes';

test('beforeApiCall dispatches "loading" and "noError" actions', () => {
   const gen = beforeApiCall()
    expect(gen.next().value).toEqual(put({type : actionTypes.loading}))
    expect(gen.next().value).toEqual(put({type : actionTypes.noError}))
})

test('afterSuccessApiCall dispatches "addPost", "addUser", or "addComment" depends on given time and ded" actions', () => {
    const payload = {data : 'comment'};
    const gen = afterSuccessApiCall(actionTypes.addComment, payload);
    expect(gen.next().value).toEqual(put({ type : actionTypes.addComment, payload }));
    expect(gen.next().value).toEqual(put({type : actionTypes.loaded}));
})
test('afterFailedApiCall dispatches "error" and "loaded" actions', () => {
    const gen = afterFailedApiCall()
    expect(gen.next().value).toEqual(put({type : actionTypes.error}))
    expect(gen.next().value).toEqual(put({type : actionTypes.loaded}))
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


