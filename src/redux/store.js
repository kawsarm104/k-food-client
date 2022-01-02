import { configureStore } from '@reduxjs/toolkit';
import serviceSlice from '../redux/slices/productSlices';

export const store = configureStore({
  reducer: {
    services: serviceSlice
  }
});
