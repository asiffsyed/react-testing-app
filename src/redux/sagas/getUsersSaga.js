import { call } from 'redux-saga/effects';
import { beforeApiCall, apiCall, afterSuccessApiCall } from './helperSagas';
import actionTypes from '../actionTypes';


export default function* getUsersData(){
    const url = "https://jsonplaceholder.typicode.com/users"
    yield call(beforeApiCall);
    const data = yield call(apiCall, url);
    yield call(afterSuccessApiCall, actionTypes.addUser, data);
}