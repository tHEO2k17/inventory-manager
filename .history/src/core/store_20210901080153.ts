import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../presentation/slice/product';

export default configureStore({
    reducer: {
        products: productReducer
    }
});