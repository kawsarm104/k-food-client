import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await fetch(
    'https://still-peak-01540.herokuapp.com/orders'
  ).then((res) => res.json());
  console.log(response);
  return response;
});

export const cartSlice = createSlice({
  name: 'products',
  initialState: {
    allOrders: [],
    status: 'idle'
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.allOrders = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchOrders.pending, (state, action) => {
      state.status = 'pending';
    });
  }
});

export const { aSingleProduct } = cartSlice.actions;

export default cartSlice.reducer;
