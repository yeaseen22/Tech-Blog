/**
 * Example usage:
 * const authToken = "yourAuthTokenHere";
 * setCookie("userToken", authToken, 30); 
 * Sets a cookie named 'userToken' that expires in 30 days.
 * @param {*} name 
 * @param {*} value 
 * @param {*} daysToExpire 
 */
export function setCookie(name, value, daysToExpire) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieValue;
}


/**
 * getCookie('authToken') -> the same of the token which is situated to cookie
 * @param {*} name 
 * @returns 
 */
export function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

/**
 * Delete Cookie with cookie tokens name
 * @param {*} name 
 */
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
