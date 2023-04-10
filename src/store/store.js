import { configureStore } from '@reduxjs/toolkit';
import shipmentsSlice from './shipmentsSlice';

export const store = configureStore({
  reducer: {
    shipments: shipmentsSlice,
  },
});
