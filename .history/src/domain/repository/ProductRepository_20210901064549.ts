import { mock } from "../../core/mock"
import { ActionType } from "../../presentation/redux/action-type"
import { Dispatch } from "redux";
import { IProduct } from "../dto/IProduct";
import { Action } from "../../presentation/redux/actions";

export default class ProductRepository {

    public static fetchProducts() {
        return (dispatch: Dispatch<Action>) => {
            dispatch({ type: ActionType.GET_PRODUCTS })
        }
    }

    public static addProduct(product: IProduct) {
        return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.ADD_PRODUCT,
                payload: product
            })
        }
    }

    public static editProduct(id: number, product: IProduct) {
        return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.EDIT_PRODUCT,
                id,
                payload: product
            })
        }
    }

    public static deleteProduct(id: number) {
        return (dispatch: Dispatch<Action>) => {
            dispatch({
                type: ActionType.DELETE_PRODUCT,
                id: id,
            })
        }
    }
}