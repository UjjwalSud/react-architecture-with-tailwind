export interface AppState {
  isAuthenticated: boolean;
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
  type: typeof LOGIN;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AppActionTypes = LoginAction | LogoutAction;
