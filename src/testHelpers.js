import { createStore } from 'redux';
import rootReducer from './redux/reducers'

export const findWithAttribute = (wrapper, attr) => wrapper.find(`[data-test="${attr}"]`)

export const storeFactory = initialState => createStore(rootReducer, initialState)


