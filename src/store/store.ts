import { configureStore } from '@reduxjs/toolkit';
import { interviewSummaryReducer, userReducer } from './slices';
import { bannerMessageReducer } from './slices/bannerMessage';

export const reducer = {
  interviewSummary: interviewSummaryReducer,
  user: userReducer,
  bannerMessage: bannerMessageReducer
};

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
