import { call } from 'redux-saga/effects';
import { beforeApiCall, apiCall, afterSuccessApiCall } from './helperSagas';
import actionTypes from '../actionTypes';

export default function* getPostsData(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    yield call(beforeApiCall);
    const data = yield call(apiCall, url);
    yield call(afterSuccessApiCall, actionTypes.addPost, data);
}