import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(
      'https://still-peak-01540.herokuapp.com/services'
    ).then((res) => res.json());
    // console.log(response);
    return response;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    allServices: [],
    status: 'idle'
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allServices = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'pending';
    });
  }
});

export const { aSingleProduct } = productSlice.actions;

export default productSlice.reducer;
