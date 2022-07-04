
export const SET_LOGIN_USER = 'SET_LOGIN_USER' as const;
export const SET_LOGOUT_USER = 'SET_LOGOUT_USER' as const;

export function setLogin(data: object) {
  return {
    type: SET_LOGIN_USER,
    payload: data,
  };
}
export function setLogout() {
  return {
    type: SET_LOGOUT_USER,
    payload: null,
  };
}
