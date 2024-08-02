// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
