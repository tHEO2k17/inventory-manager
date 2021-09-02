import { createSlice } from "@reduxjs/toolkit";
import ProductRepository from "../../domain/repository/product.repository";

const productSlice = createSlice({
    name: 'products',
    initialState: ProductRepository.fetchProducts(),
    reducers: {
        addProducts: (state, action) => {
            ProductRepository.addProduct(action.payload);
        },
        editProduct: (state, action) => {
            ProductRepository.editProduct(action.payload.id, action.payload);
        },
        deleteProduct: (state, action) => {
            ProductRepository.deleteProduct(action.payload.id);
        }
    }
})

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;