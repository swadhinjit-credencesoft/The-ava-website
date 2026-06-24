import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  mobileMenuOpen: boolean;
}

const initialState: NavigationState = {
  mobileMenuOpen: false,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});

export const { setMobileMenuOpen, toggleMobileMenu } = navigationSlice.actions;
export default navigationSlice.reducer;