import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERROR,
} from "../constants/authConstant";

/**
 * Login Reducer
 */
export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        user: {},
      };

    case LOGIN_SUCCESS:
      return {
        loading: false,
        success: action.payload?.success,
        user: action.payload?.user,
        message: action.payload?.message,
      };

    case LOGIN_FAIL:
      return {
        loading: false,
        success: action.payload.success || false,
        message: action.payload.message || null,
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

/**
 * Register Reducer
 */
export const registerReducer = (state = { userRegister: {} }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: true,
        userRegister: {},
      };

    case REGISTER_SUCCESS:
      return {
        loading: false,
        success: action.payload?.success,
        userRegister: action.payload?.user,
        message: action.payload?.message,
      };

    case REGISTER_FAIL:
      return {
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      };

    case CLEAR_ERROR:
      return {
        loading: false,
        userRegister: {},
      };

    default:
      return state;
  }
};

export const logoutReducer = (state = { userLogout: {} }, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        loading: true,
        userLogout: {},
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        userLogout: action.payload.user,
        message: action.payload.message,
      };
    case LOGOUT_FAIL:
      return {
        loading: false,
        success: action.payload.success || false,
        message: action.payload.message || null,
      };
    case CLEAR_ERROR:
      return {
        loading: false,
        success: null,
        userLogout: {},
      };
    default:
      return state;
  }
};
