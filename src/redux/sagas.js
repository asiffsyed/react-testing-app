import { put, takeEvery, delay, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios';

export function* getPostsData(){
    let data
    yield put ({type : "LOADING"})
    yield put ({type : "NO_ERROR"})
    try{
       yield axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => data = res.data)
        yield put({ type : "ADD_POST", payload : data});
        yield put ({type : 'LOADED'})
    }
    catch(error){
        yield put({type: "ERROR"})
        yield put ({type : 'LOADED'})
    }
}

function* getUsersData(){
    let data;
    yield put ({type : "LOADING"})
    yield put ({type : "NO_ERROR"})
    yield delay(500)
    try{
      yield axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => data = res.data)
        yield put({ type : "ADD_USER", payload : data} );
        yield put ({type : 'LOADED'})
    }
    catch(error){
        yield put({type: "ERROR"})
        yield put ({type : 'LOADED'})
    }
}
function* getCommentsData(){
    let data;
    yield put ({type : "LOADING"})
    yield put ({type : "NO_ERROR"})
    yield delay(500)
    try{
      yield axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => data = res.data)
        yield put({ type : "ADD_COMMENT", payload : data});
        yield put ({type : 'LOADED'})
    }
    catch(error){
        yield put({type: "ERROR"})
        yield put ({type : 'LOADED'})
    }
}



export default function* rootSaga(){
    yield takeEvery('GET_POST', getPostsData);
    yield takeEvery('GET_USER', getUsersData);
    yield takeLatest('GET_COMMENT', getCommentsData)
}