import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import rootSaga, { getPostsData } from './sagas';
import actionTypes from './actionTypes';
import mockAxios from '../__mock__/axios';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

const store = mockStore({});
sagaMiddleware.run(rootSaga);

test('getPost action dispatches loading action', () => {
    store.dispatch({type: actionTypes.getPost})
    const actions = store.getActions();
})


