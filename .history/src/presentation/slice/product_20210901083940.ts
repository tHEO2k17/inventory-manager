import { createSlice } from "@reduxjs/toolkit";
import { typedMock } from "../../core/mock";
import ProductRepository from "../../domain/repository/product.repository";

const productSlice = createSlice({
    name: 'products',
    initialState: typedMock,
    reducers: {
        addProducts: (state, action) => {
            ProductRepository.addProduct(action.payload);
        }
    }
})

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;