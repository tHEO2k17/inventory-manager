import { combineReducers } from "redux";
import productReducer from './product';

const reducers = combineReducers({
    products: productReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>