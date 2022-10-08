import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state,action) {
      state.products = action.payload
    },
    removeProduct(state,action) {
      state.products = []
    }
  }
})
export const { addProduct, removeProduct } = productReducer.actions
export default productReducer.reducer



