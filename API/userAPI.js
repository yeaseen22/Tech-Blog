import Axios from "axios";
import { USER_API_URL, bearerToken } from "@/config";

/**
 * User Profile Check API
 */
export const authCheck = async () => {
    try {
        const login = await Axios.get(`${USER_API_URL}/check`, {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                ContentType: "application/json",
                Accept: "application/json",
            },
        });
        return login?.data;
    } catch (e) {
        return e?.response?.data;
    }
};