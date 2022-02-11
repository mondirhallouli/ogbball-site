import { createSlice } from '@reduxjs/toolkit';
import productList from '../productList';

const initialState = {
  products: productList,
  cart: {
    items: [],
    total: 0
  }
};

const shopSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {

      const cartItem = {
        id: Date.now(),
        img: action.payload.img,
        title: action.payload.title,
        price: action.payload.price
      };

      state.cart.items.push(cartItem);
      state.cart.total += cartItem.price;
    },
    removeFromCart(state, action) {
      state.cart.items.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addToCart, removeFromCart } = shopSlice.actions;
export default shopSlice.reducer;