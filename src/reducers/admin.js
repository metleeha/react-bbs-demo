import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { 
    createRequestActionTypes 
} from '../sagas/createRequestSaga';
import * as userAPI from '../sagas/api/admin';

const [
    LIST_USERS,
    LIST_USERS_SUCCESS,
    LIST_USERS_FAILURE,
] = createRequestActionTypes('admin/LIST_USERS');

export const listUsers = createAction(LIST_USERS);

const listUsersSaga = createRequestSaga(LIST_USERS, userAPI.users_get_all);

export function* adminSaga() {
  yield takeLatest(LIST_USERS, listUsersSaga);
}

const initialState = {
  users: [],
  error: null,
};

const admin = handleActions(
  {
    [LIST_USERS_SUCCESS]: (state, { payload: users }) => ({
        ...state,
        users,
    }),
    [LIST_USERS_FAILURE]: (state, { payload: error}) => ({
        ...state,
        error,
    })
  },
  initialState,
);

export default admin;