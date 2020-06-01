import commentReducer from './commentsReducer';
import actionTypes from '../actionTypes'

test('returns intial state when the action type does not matches', () => {
    const action = {
        type : 'WRONG_TYPE'
    }
    const initailState = ['Hello'];
    const state = commentReducer(initailState, action);
    expect(state).toEqual(initailState);
})

test('returns new state from action payload when action type matches and initial state is undefined', () => {
    const action = {
        type : actionTypes.addComment,
        payload : [{body : 'Hello'}]
    }

    const state = commentReducer(undefined, action);
    expect(state).toEqual(['Hello'])
})

test('returns new state combining exisisting state when the initial state exists', () => {
    const action = {
        type : actionTypes.addComment,
        payload : [ {body : 'hey'} ,{body : 'Second Comment'} ]
    }
    const initialState = ['First Comment'];
    const state = commentReducer(initialState, action);
    expect(state).toEqual(['First Comment', 'Second Comment'])

})