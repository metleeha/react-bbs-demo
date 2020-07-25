import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, { createRequestActionTypes } from '../sagas/createRequestSaga';

// actions 선언 
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// actions 선언 함수 
export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form, // register, login 
        key, //username, password, passwordConfirm
        value, // 실제 바꾸려는 값
    }),
);

// actions 초기화 함수 
export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register / login

const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    }
}

// actions 핸들링 
const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => 
          produce(state, draft => {
              draft[form][key] = value;
          }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form]
        })
    },
    initialState,
);


export function* authSaga() {
    // pass    
}

export default auth;