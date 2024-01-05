/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URLS = 'http://127.0.0.1:8000/';


interface Products {
  id: number;
  name: string;
  price: number;
  serial_number: number
}

interface ProductsState {
    products: Products[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

// interface FetchProductsResponse {
//   data: Debtors[];
// }

const initialState: ProductsState = {
    products: [],
    status: "idle",
    error: null,
};

export const fetchProducts = createAsyncThunk<Products[], void, {}>(
    "products/fetchProducts",
    async () => {
      const response = await axios.get<Products[]>(PRODUCTS_URLS);
      return response.data; // Corrected the return statement
    }
  );
  

const productstSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const selectAllProducts = (state: { products: ProductsState }) =>
  state.products.products;
export const getProductsStatus = (state: { products: ProductsState }) =>
  state.products.status;
export const getDebtorsError = (state: { products: ProductsState }) =>
  state.products.error;

export default productstSlice.reducer;