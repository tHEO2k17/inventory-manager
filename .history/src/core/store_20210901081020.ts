import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../presentation/slice/product';

const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;