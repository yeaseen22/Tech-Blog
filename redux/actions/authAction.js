import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
} from "../constants/authConstant";
import { loginRequest, registerRequest, logoutRequest } from "@/API";
import { deleteCookie, setCookie } from "@/utils/cookieUtils";

/**
 * === Login Action Function ===
 */
export const loginAction = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  const data = await loginRequest(userData);

  if (!data.success) {
    dispatch({ type: LOGIN_FAIL, payload: data });
  }

  if (data.success) {
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    setCookie("authToken", data?.user?.token, 1);
  }
};

/**
 * Register Action Function
 */
export const registerAction = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  const data = await registerRequest(userData);

  if (!data.success) {
    dispatch({ type: REGISTER_FAIL, payload: data });
  }

  if (data.success) {
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    setCookie("authToken", data?.user?.token, 1);
  }
};

/**
 * Logout Action
 * @returns 
 */
export const logoutAction = () => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  const data = await logoutRequest();

  if (!data.success) {
    dispatch({ type: LOGOUT_FAIL, payload: data });
  }
  if (data.success) {
    dispatch({ type: LOGOUT_SUCCESS, payload: data });
    deleteCookie("authToken");
  }
};
