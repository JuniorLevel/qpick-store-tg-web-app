import {
  PayloadAction,
  UnknownAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { ICategory, IProduct } from 'interfaces/interfaces';

interface IDefaultState {
  searchProduct: string;
  productsList: IProduct[];
  productsCategories: ICategory[];
  filteredProducts: IProduct[];
  cartList: IProduct[];
  productById: IProduct | null;
  isLoading: boolean;
  error: null | object;
}

const initialState: IDefaultState = {
  searchProduct: '',
  productsList: [],
  productsCategories: [],
  filteredProducts: [],
  cartList: localStorage.getItem('cartList')
    ? JSON.parse(<string>localStorage.getItem('cartList'))
    : [],
  productById: null,
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk<IProduct[]>(
  'products/getProducts',
  async () => {
    const res = await axios.get<IProduct[]>(
      'https://api.escuelajs.co/api/v1/products',
    );
    return res.data;
  },
);

export const getProductById = createAsyncThunk<IProduct, number>(
  'products/getProductById',
  async (id: number) => {
    const res = await axios.get<IProduct>(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    );
    return res.data;
  },
);

export const getProductsCategories = createAsyncThunk<ICategory[]>(
  'products/getProductsCategories',
  async () => {
    const res = await axios.get<ICategory[]>(
      `https://api.escuelajs.co/api/v1/categories`,
    );
    return res.data;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.cartList.push(action.payload);
      localStorage.setItem('cartList', JSON.stringify(state.cartList));
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.cartList = state.cartList.filter(
        item => item.id !== action.payload.id,
      );
      localStorage.setItem('cartList', JSON.stringify(state.cartList));
    },
    clearCartList: (state, action: PayloadAction<IProduct[]>) => {
      state.cartList = action.payload;
    },
    searchProductByTitle: (state, action: PayloadAction<string>) => {
      state.searchProduct = action.payload;
    },
    filterProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.isLoading = false;
          state.productsList = action.payload;
        },
      );
    builder
      .addCase(getProductById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getProductById.fulfilled,
        (state, action: PayloadAction<IProduct>) => {
          state.isLoading = false;
          state.productById = action.payload;
        },
      );
    builder
      .addCase(getProductsCategories.pending, () => {})
      .addCase(
        getProductsCategories.fulfilled,
        (state, action: PayloadAction<ICategory[]>) => {
          state.error = null;
          state.productsCategories = action.payload;
        },
      )
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = { message: action.payload };
      });
  },
});

function isError(action: UnknownAction) {
  return action.type.endsWith('rejected');
}

export const {
  setIsLoading,
  addToCart,
  removeFromCart,
  clearCartList,
  searchProductByTitle,
  filterProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
