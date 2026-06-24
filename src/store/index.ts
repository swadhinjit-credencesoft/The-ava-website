import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';
import navigationReducer from './slices/navigationSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;