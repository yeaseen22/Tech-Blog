import Axios from "axios";
import { AUTH_API_URL, USER_API_URL, headers } from "../config";
import { bearerToken } from "../config/index";

/**
 * Login Request action
 */
export const loginRequest = async (data) => {
  try {
    const login = await Axios.post(`${AUTH_API_URL}/login`, data, { headers });
    return login?.data;
  } catch (e) {
    return e?.response?.data;
  }
};

/**
 * Register Request Action
 */
export const registerRequest = async (data) => {
  try {
    const register = await Axios.post(`${AUTH_API_URL}/register`, data, {
      headers,
    });

    return register?.data;
  } catch (e) {
    return e?.response?.data;
  }
};

/**
 * Logout Request Action
 */
export const logoutRequest = async () => {
  try {
    const logout = await Axios.get(`${USER_API_URL}/logout`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        ContentType: "application/json",
        Accept: "application/json",
      },
    });

    console.log("LOGOUT  --- ", logout);

    return logout?.data;
  } catch (e) {
    return e?.response?.data;
  }
};
