import produce from '../lib/produce';

// 초기값
export const initialState = {
    loadUserLoading: false, // 유저 정보 가져오기 시도중
    loadUserDone: false,
    loadUserError: null,
    userInfo: null,
  };

// actions 
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
  
// reducers 
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_USER_REQUEST:
            draft.loadUserLoading = true;
            draft.loadUserError = null;
            draft.loadUserDone = false;
            break;
        case LOAD_USER_SUCCESS:
            draft.loadUserLoading = false;
            draft.userInfo = action.data;
            draft.loadUserDone = true;
            break;
        case LOAD_USER_FAILURE:
            draft.loadUserLoading = false;
            draft.loadUserError = action.error;
            break;
        default:
            break;
        }
});

export default reducer;