import { configureStore } from '@reduxjs/toolkit';
import { interviewSummaryReducer, userReducer } from './slices';

export const reducer = {
  interviewSummary: interviewSummaryReducer,
  user: userReducer
};

export const store = configureStore({reducer});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
