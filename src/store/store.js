import { configureStore } from '@reduxjs/toolkit';
import shipmentsSlice from './shipmentsSlice';
import activeShipmentSlice from './activeShipmentSlice';

export const store = configureStore({
  reducer: {
    shipments: shipmentsSlice,
    activeShipment: activeShipmentSlice,
  },
});
