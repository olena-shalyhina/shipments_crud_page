import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeShipment: {},
};

export const activeShipmentSlice = createSlice({
  name: 'activeShipment',
  initialState,
  reducers: {
    setActiveShipment: (state, action) => {
      state.activeShipment = action.payload;
    },
  },
});

export const { setActiveShipment } = activeShipmentSlice.actions;
export default activeShipmentSlice.reducer;
