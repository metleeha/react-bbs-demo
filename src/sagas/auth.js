import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS, 
  } from '../reducers/auth';

  function logInAPI(data) {
    return axios.post('/api/auth/login', data);
  }
  
  function* logIn(action) {
    try {
      const result = yield call(logInAPI, action.data);
      yield put({
        type: LOG_IN_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOG_IN_FAILURE,
        error: err.response.data,
      });
    }
  }
  
  function logOutAPI() {
    return axios.post('/user/logout');
  }
  
  function* logOut() {
    try {
      yield call(logOutAPI);
      yield put({
        type: LOG_OUT_SUCCESS,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOG_OUT_FAILURE,
        error: err.response.data,
      });
    }
  }

  function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
  }
  
  function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
  }

  export default function* authSaga() {
    yield all([
      fork(watchLogIn),
      fork(watchLogOut),
    ]);
  }