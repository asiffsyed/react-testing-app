import { call, put } from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import apiCalls from '../../apiCalls';


//Starts spinner and clears the error
export function* beforeApiCall(){
    yield put ({type : actionTypes.loading})
    yield put ({type : actionTypes.noError})
}

//ApiCall
export function* apiCall(url){
    let data;
    try{
        data = yield call(apiCalls.getData, url);
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

export default {
    beforeApiCall,
    apiCall,
    afterSuccessApiCall,
    afterFailedApiCall,
}