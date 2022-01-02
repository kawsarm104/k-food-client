import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../redux/slices/productSlices';
import cartReducer from '../redux/slices/cartSlice';

export const store = configureStore({
  reducer: {
    services: serviceReducer,
    cart: cartReducer
  }
});
