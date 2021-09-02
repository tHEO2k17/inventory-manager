import { combineReducers } from "redux";
import productReducer from './product';

const reducers = combineReducers({
    productState: productReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>