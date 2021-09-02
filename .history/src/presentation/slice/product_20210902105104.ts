import { createSlice } from "@reduxjs/toolkit";
import ProductRepository from "../../domain/repository/product.repository";

const productSlice = createSlice({
    name: 'products',
    initialState: ProductRepository.fetchProducts(),
    reducers: {
        addProduct: (state, action) => {
            ProductRepository.addProduct(action.payload);
            state = ProductRepository.fetchProducts();
        },
        editProduct: (state, action) => {
            ProductRepository.editProduct(action.payload.id, action.payload);
        },
        deleteProduct: (state, action) => {
            ProductRepository.deleteProduct(action.payload.id);
        }
    }
})

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;