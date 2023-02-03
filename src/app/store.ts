import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import spotifyReducer from '../slices/spotifySlice';
import filterButtonsReducer from '../slices/filterButtonsSlice'
import ThemeSliceReducer from '../slices/ThemeSlice';
import MenuSliceReducer from '../slices/menuSlice';
import RadarChartReducer from '../slices/radarChartSlice';

export const store = configureStore({
  reducer: {
    spotifyAPI: spotifyReducer,
    filterButtons: filterButtonsReducer,
    themeSlice:ThemeSliceReducer,
    menu:MenuSliceReducer,
    RadarChart:RadarChartReducer,

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
