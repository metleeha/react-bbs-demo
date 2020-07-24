import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
  } from '../reducers/user';

  
  function loadUserAPI() {
    return axios.get(`api/users`);
  }
  
  function* loadUser() {
    try {
      const result = yield call(loadUserAPI);
      console.log('loadUserData', result.data);
      yield put({
        type: LOAD_USER_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LOAD_USER_FAILURE,
        error: err.response.data,
      });
    }
  }

  function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
  }

  export default function* userSaga() {
    yield all([
        fork(watchLoadUser),
    ]);
  }