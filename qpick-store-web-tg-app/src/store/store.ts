import { configureStore } from '@reduxjs/toolkit';
import pricesSlice from '../features/prices/prices.slice';
import productsSlice from '../features/products/products.slice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    prices: pricesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
