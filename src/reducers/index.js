import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import admin, { adminSaga } from './admin';
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    loading,
    admin,
});

export function* rootSaga() {
    yield all([authSaga(), adminSaga()]);
  }

export default rootReducer;