import { createSlice } from "@reduxjs/toolkit";
import { hotelData } from "@/data/siteData";
import { pages } from "@/data/pages";

const initialState = {
  hotel: hotelData,
  pages,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
