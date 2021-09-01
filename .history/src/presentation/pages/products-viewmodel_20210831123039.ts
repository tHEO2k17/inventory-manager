import { createSlice } from "@reduxjs/toolkit";
import { mock } from "../../core/mock";

const productsViewModel = createSlice({
    name: 'products',
    initialState: mock.products,
    reducers: {
        addProducts: (state, action) => {

        }
    }
});

export const { addProducts } = productsViewModel.actions;
export default productsViewModel.reducer;