import usersReducer from './usersReducer';
import actionTypes from '../actionTypes'

test('returns intial state when the action type does not matches', () => {
    const action = {
        type : 'WRONG_TYPE'
    }
    const initailState = ['Hello'];
    const state = usersReducer(initailState, action);
    expect(state).toEqual(initailState);
})

test('returns new state from action payload when action type matches and initial state is undefined', () => {
    const action = {
        type : actionTypes.addUser,
        payload : [{name : 'Hello'}]
    }

    const state = usersReducer(undefined, action);
    expect(state).toEqual(['Hello'])
})

test('returns new state combining exisisting state when the initial state exists', () => {
    const action = {
        type : actionTypes.addUser,
        payload : [ {name : 'hey'} ,{name : 'Second Post'} ]
    }
    const initialState = ['First Post'];
    const state = usersReducer(initialState, action);
    expect(state).toEqual(['First Post', 'Second Post'])

})