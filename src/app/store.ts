import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import spotifyReducer from '../features/spotifySlice';
import filterButtonsReducer from '../features/filterButtonsSlice'

export const store = configureStore({
  reducer: {
    spotifyAPI: spotifyReducer,
    filterButtons: filterButtonsReducer,
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
