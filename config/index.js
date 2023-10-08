import { getCookie } from "../utils/cookieUtils";
// All API ENDPOINTS will be there..
// And ALl Headers...
export const AUTH_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;
export const USER_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/user`;
export const bearerToken = getCookie("authToken");

// Headers..
export const headers = {
  Authorization: `Bearer ${bearerToken}`,
  ContentType: "application/json",
  Accept: "application/json",
};
