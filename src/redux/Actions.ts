import { LOGIN, LOGOUT, AppActionTypes } from './Types';

export const login = (): AppActionTypes => ({
  type: LOGIN
});

export const logout = (): AppActionTypes => ({
  type: LOGOUT
});
