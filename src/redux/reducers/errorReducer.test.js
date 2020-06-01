import actionTypes from '../actionTypes';
import errorReducer from './errorReducer';

test('returns false when action type does not match', () => {
    const action = {
        type : "UNKNOWN"
    }
    const state = errorReducer(undefined, action);
    expect(state).toBe(false);
})

test('returns "true" when the "ERROR" action dispatches', () => {
    const action = {
        type : actionTypes.error
    }
    const state = errorReducer(undefined, action);
    expect(state).toBe(true);
})

test('returns "false" when the "NO_ERROR" action dispatches', () => {
    const action = {
        type : actionTypes.noError
    }
    const state = errorReducer(undefined, action);
    expect(state).toBe(false);
})