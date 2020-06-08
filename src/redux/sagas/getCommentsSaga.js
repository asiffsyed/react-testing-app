import { call } from 'redux-saga/effects';
import { beforeApiCall, apiCall, afterSuccessApiCall } from './helperSagas';
import actionTypes from '../actionTypes';

export default function* getCommentsData() {
	const url = 'https://jsonplaceholder.typicode.com/comments';
	yield call(beforeApiCall);
	const data = yield call(apiCall, url);
	yield call(afterSuccessApiCall, actionTypes.addComment, data);
}
