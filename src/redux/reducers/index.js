import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import usersReducer from './usersReducer';
import errorReducer from './errorReducer';
import nameReducer from './nameReducer';


const rootReducer = combineReducers({
    loading: loadingReducer,
    posts : postsReducer,
    comments : commentsReducer,
    users: usersReducer,
    error : errorReducer,
    name : nameReducer
})

export default rootReducer;