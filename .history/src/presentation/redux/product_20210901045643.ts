import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: { value: 0 },
    reducers: {
        addProduct: (state, action) => { }
    }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;