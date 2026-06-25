import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
}

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function tomorrowStr(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const initialState: BookingState = {
  checkIn: todayStr(),
  checkOut: tomorrowStr(),
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