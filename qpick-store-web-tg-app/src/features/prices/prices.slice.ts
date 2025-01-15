import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPrice {
  totalPrice: number;
}

const initialState: IPrice = {
  totalPrice: localStorage.getItem('totalPrice')
    ? Number(localStorage.getItem('totalPrice'))
    : 0,
};

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    addTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
      localStorage.setItem('totalPrice', String(state.totalPrice));
    },
    subTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice -= action.payload;
      localStorage.setItem('totalPrice', String(state.totalPrice));
    },
    addDeliveryPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
      localStorage.setItem('totalPrice', String(state.totalPrice));
    },
    subDeliveryPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice -= action.payload;
      localStorage.setItem('totalPrice', String(state.totalPrice));
    },
    cancelTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
      localStorage.setItem('totalPrice', String(state.totalPrice));
    },
  },
});

export const {
  addTotalPrice,
  subTotalPrice,
  subDeliveryPrice,
  addDeliveryPrice,
  cancelTotalPrice,
} = pricesSlice.actions;
export default pricesSlice.reducer;
