import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actionTypes from '../actionTypes';

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