import Cookies from 'js-cookie';

/**
 * Example usage:
 * const authToken = "yourAuthTokenHere";
 * setCookie("userToken", authToken, 30); 
 * Sets a cookie named 'userToken' that expires in 30 days.
 * @param {string} name 
 * @param {string} value 
 * @param {number} daysToExpire 
 */
export function setCookie(name, value, daysToExpire) {
  Cookies.set(name, value, { expires: daysToExpire });
}

/**
 * getCookie('authToken') -> the same of the token which is situated to cookie
 * @param {string} name 
 * @returns {string|null}
 */
export function getCookie(name) {
  return Cookies.get(name) || null;
}

/**
 * Delete Cookie with cookie tokens name
 * @param {string} name 
 */
export function deleteCookie(name) {
  Cookies.remove(name);
}