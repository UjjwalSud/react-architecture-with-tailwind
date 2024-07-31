import { AppState, AppActionTypes, LOGIN, LOGOUT } from './Types';

const initialState: AppState = {
  isAuthenticated: false
};

export const authReducer = (state = initialState, action: AppActionTypes): AppState => {
    debugger
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
