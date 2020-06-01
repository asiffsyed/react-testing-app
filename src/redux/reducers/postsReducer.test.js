import postsReducer from './postsReducer';
import actionTypes from '../actionTypes'

test('returns intial state when the action type does not matches', () => {
    const action = {
        type : 'WRONG_TYPE'
    }
    const initailState = ['Hello'];
    const state = postsReducer(initailState, action);
    expect(state).toEqual(initailState);
})

test('returns new state from action payload when action type matches and initial state is undefined', () => {
    const action = {
        type : actionTypes.addPost,
        payload : [{title : 'Hello'}]
    }

    const state = postsReducer(undefined, action);
    expect(state).toEqual(['Hello'])
})

test('returns new state combining exisisting state when the initial state exists', () => {
    const action = {
        type : actionTypes.addPost,
        payload : [ {title : 'hey'} ,{title : 'Second Post'} ]
    }
    const initialState = ['First Post'];
    const state = postsReducer(initialState, action);
    expect(state).toEqual(['First Post', 'Second Post'])

})