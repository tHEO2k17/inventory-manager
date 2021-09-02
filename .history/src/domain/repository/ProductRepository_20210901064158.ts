import { mock } from "../../core/mock"
import { ActionType } from "../../presentation/redux/action-type"
import { Dispatch } from "redux";
import { IProduct } from "../dto/IProduct";

export default class ProductRepository {

    public static fetchProducts() {
        return (dispatch: Dispatch) => {
            dispatch({ type: ActionType.PRODUCTS_FETCHED })
        }
    }

    public static addProduct(product: IProduct) {
        return (dispatch: Dispatch) => {
            dispatch({
                type: ActionType.PRODUCTS_FETCHED,
                payload: product
            })
        }
    }
}