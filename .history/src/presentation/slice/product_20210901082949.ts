import { createSlice } from "@reduxjs/toolkit";
import { typedMock } from "../../core/mock";
import ProductRepository from "../../domain/repository/product.repository";

const productSlice = createSlice({
    name: 'products',
    initialState: typedMock,
    reducers: {
        getProducts: (state, action) => {
            state.products = ProductRepository.fetchProducts();
        }
    }
})

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;