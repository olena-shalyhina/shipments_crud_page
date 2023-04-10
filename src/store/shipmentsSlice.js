import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
  shipments: [],
  isLoading: false,
  error: null,
};

export const fetchShipments = createAsyncThunk(
  'shipments/fetchShipments',
  async () => {
    const data = await fetch('shipments.json').then((respons) =>
      respons.json()
    );

    console.log(data);
    return data;
  }
);
// export const fetchShipments = createAsyncThunk(
//   'shipments/fetchShipments',
//   async () => {
//     const res = await axios(
//       'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'
//       // 'https://shipments.json'
//     );
//     const data = await res.data;
//     return data;
//   }
// );

export const shipmentsSlice = createSlice({
  name: 'shіpments',
  initialState,
  reducers: {
    setShipments: (state, action) => {
      state.shipments = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchShipments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchShipments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shipments = action.payload;
    });
    builder.addCase(fetchShipments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setShipments } = shipmentsSlice.actions;
export default shipmentsSlice.reducer;
