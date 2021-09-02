import { createSlice } from "@reduxjs/toolkit";
import { mock } from "../../core/mock";
import ProductRepository from "../../domain/repository/product.repository";

const productSlice = createSlice({
    name: 'products',
    initialState: mock.products,
    reducers: {
        getProducts: (state, action) => {
            state = ProductRepository.fetchProducts();
        }
    }
})

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;