import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchServices = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(
      'https://still-peak-01540.herokuapp.com/services'
    ).then((res) => res.json());
    console.log(response);
    return response;
  }
);

export const serviceSlice = createSlice({
  name: 'products',
  initialState: {
    allServices: [],
    status: 'idle'
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.allServices = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchServices.pending, (state, action) => {
      state.status = 'pending';
    });
  }
});

export const { aSingleProduct } = serviceSlice.actions;

export default serviceSlice.reducer;
