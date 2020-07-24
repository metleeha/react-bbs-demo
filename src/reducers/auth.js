import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

export function* authSaga() {
    // pass    
}

const initialState = {};

const auth = handleActions(
    {
        [SAMPLE_ACTION]: (state, action) => state,
    },
    initialState,
);

export default auth;