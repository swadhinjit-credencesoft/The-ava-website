import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
}

const initialState: BookingState = {
  checkIn: '',
  checkOut: '',
  guests: 1,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setCheckIn: (state, action: PayloadAction<string>) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action: PayloadAction<string>) => {
      state.checkOut = action.payload;
    },
    setGuests: (state, action: PayloadAction<number>) => {
      state.guests = action.payload;
    },
  },
});

export const { setCheckIn, setCheckOut, setGuests } = bookingSlice.actions;
export default bookingSlice.reducer;