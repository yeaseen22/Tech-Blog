import {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
} from "../constants/userConstant";
import { authCheck } from "@/API/userAPI";

/**
 * === Login Action Function ===
 */
export const authCheckerAction = () => async (dispatch) => {
  dispatch({ type: USER_AUTH_REQUEST });

  const data = await authCheck();

  if (!data.success) {
    dispatch({ type: USER_AUTH_FAIL, payload: data });
  }

  if (data.success) {
    dispatch({ type: USER_AUTH_SUCCESS, payload: data });
  }
};
