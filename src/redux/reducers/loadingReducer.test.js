import actionTypes from '../actionTypes';
import loadingReducer from './loadingReducer';

test('returns false when action type does not match', () => {
    const action = {
        type : "UNKNOWN"
    }
    const state = loadingReducer(undefined, action);
    expect(state).toBe(false);
})

test('returns "true" when the "LOADING" action dispatches', () => {
    const action = {
        type : actionTypes.loading
    }
    const state = loadingReducer(undefined, action);
    expect(state).toBe(true);
})

test('returns "false" when the "LOADED" action dispatches', () => {
    const action = {
        type : actionTypes.loaded
    }
    const state = loadingReducer(undefined, action);
    expect(state).toBe(false);
})