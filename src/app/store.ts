import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import showsSlice from '../features/showsSlice';

export const store = configureStore({
  reducer: {
    list: showsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
