import {
    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    CLEAR_ERROR
} from '../constants/userConstant';

/**
 * Profile Auth Reducer
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const authCheckReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_AUTH_REQUEST:
            return {
                loading: true,
                user: {},
            };
        case USER_AUTH_SUCCESS:
            return {
                loading: false,
                success: action.payload?.success,
                user: action.payload?.user,
            };
        case USER_AUTH_FAIL:
            return {
                loading: false,
                success: action.payload?.success || false,
            };
        case CLEAR_ERROR:
            return {
                loading: false,
                user: {},
            };
        default:
            return state;
    }
};
