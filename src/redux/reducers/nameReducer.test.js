import actionTypes from '../actionTypes';
import nameReducer from './nameReducer';

test('When action types does not match, it returns an empty object', () => {
    const action = {
        type : "UNKNOWN"
    }
    const state = nameReducer(undefined, action)
    expect(state).toEqual({})
})

test('When action type matches, it returns a new state created from payload', () => {
    const action = {
        type : actionTypes.userName,
        payload : {fName : 'Hello', lName : 'World'}
    }
    const state = nameReducer(undefined, action)
    expect(state).toEqual({fName : 'Hello', lName : 'World'})
})

test('When initial state is not empty and action type matches, It returns the new object rather than mutating the inital state ', () => {
    const action = {
        type : actionTypes.userName,
        payload : {fName : 'Asif', lName : 'Syed'}
    }
    const state = nameReducer({fName : 'Hello', lName : 'World'}, action)
    expect(state).toEqual({fName : 'Asif', lName : 'Syed'})
})