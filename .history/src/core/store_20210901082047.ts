import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../presentation/slice/product';

const store = configureStore({
    reducer: {
        productsResponse: productReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;