import { takeEvery, takeLatest} from 'redux-saga/effects'
import getPostsSaga from './getPostsSaga';
import getUsersSaga from './getUsersSaga';
import getCommentsSaga from './getCommentsSaga';

export default function* rootSaga(){
    yield takeEvery('GET_POST', getPostsSaga);
    yield takeEvery('GET_USER', getUsersSaga);
    yield takeLatest('GET_COMMENT', getCommentsSaga)
}

