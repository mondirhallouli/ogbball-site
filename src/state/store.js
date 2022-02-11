import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './cart/shopSlice';

export default configureStore({
  reducer: {
    shop: shopReducer,
  }
});