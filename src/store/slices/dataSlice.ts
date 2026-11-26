import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { hotelData } from "@/data/siteData";
import { pages } from "@/data/pages";
import { Room } from "@/types/room";

interface DataState {
  hotel: typeof hotelData & {
    rooms: Room[];
  };
  pages: typeof pages;
  roomsLoading: boolean;
  roomsError: string | null;
}

const initialState: DataState = {
  hotel: {
    ...hotelData,
    rooms: [],
  },
  pages,
  roomsLoading: true,
  roomsError: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<Room[]>) => {
      state.hotel.rooms = action.payload;
      state.roomsLoading = false;
      state.roomsError = null;
    },
    setRoomsLoading: (state, action: PayloadAction<boolean>) => {
      state.roomsLoading = action.payload;
    },
    setRoomsError: (state, action: PayloadAction<string | null>) => {
      state.roomsError = action.payload;
      state.roomsLoading = false;
    },
  },
});

export const { setRooms, setRoomsLoading, setRoomsError } = dataSlice.actions;
export default dataSlice.reducer;
