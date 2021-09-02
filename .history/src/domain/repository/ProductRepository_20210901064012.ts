import { mock } from "../../core/mock"
import { ActionType } from "../../presentation/redux/action-type"
import { Dispatch } from "redux";

export default class ProductRepository {

    public static fetchProducts() {
        return (dispatch: Dispatch) => {
            dispatch({
                type: ActionType.PRODUCTS_FETCHED,
                payload: mock.products
            })
        }
    }
}