import { mock } from "../../../core/mock";
import { ActionType } from "../action-type"
import { Action } from "../actions"

const initialState = {
    products: [],
    error: null,
    isLoading: false
}

const productReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS:
            return { ...state, products: mock.products };
        case ActionType.ADD_PRODUCT:
            return { ...state, products: action.payload };
        default:
            return state;
    }
}

export default productReducer;