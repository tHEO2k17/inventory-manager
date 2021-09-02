import { createSlice } from "@reduxjs/toolkit";
import ProductRepository from "../../domain/repository/product.repository";

const productViewModel = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        getProducts: (state, action) => {
            state = ProductRepository.fetchProducts();
        }
    }
})