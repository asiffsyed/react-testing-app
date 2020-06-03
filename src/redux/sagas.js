import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios';
import actionTypes from './actionTypes';


const urls = {
    posts : "https://jsonplaceholder.typicode.com/posts",
    users : "https://jsonplaceholder.typicode.com/users",
    comments : "https://jsonplaceholder.typicode.com/comments"
}

//Starts spinner and clears the error
export function* beforeApiCall(){
    yield put ({type : actionTypes.loading})
    yield put ({type : actionTypes.noError})
}

//ApiCall
export function* apiCall(url, type){
    let data;
    try{
        yield axios.get(url).then(res => data = res.data);
        return data;
    }
    catch{
        yield call(afterFailedApiCall)
    }
}

//Passes data to the reducer and stops the spinner
export function* afterSuccessApiCall(type, payload){
    yield put({ type : type, payload });
    yield put ({type : actionTypes.loaded})
}

//Updates the error and stops the spinner
export function* afterFailedApiCall(){
    yield put({type: actionTypes.error})
    yield put ({type : actionTypes.loaded})
}


export function* getPostsData(){
    yield call(beforeApiCall);
    const data = yield call(apiCall, urls.posts);
    yield call(afterSuccessApiCall, actionTypes.addPost, data);
}

function* getUsersData(){
    yield call(beforeApiCall);
    const data = yield call(apiCall, urls.users);
    yield call(afterSuccessApiCall, actionTypes.addUser, data);
}
function* getCommentsData(){
    yield call(beforeApiCall);
    const data = yield call(apiCall, urls.comments);
    yield call(afterSuccessApiCall, actionTypes.addComment, data);
}


export default function* rootSaga(){
    yield takeEvery('GET_POST', getPostsData);
    yield takeEvery('GET_USER', getUsersData);
    yield takeLatest('GET_COMMENT', getCommentsData)
}