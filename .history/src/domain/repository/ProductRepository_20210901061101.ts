import { mock } from "../../core/mock"
import { ActionType } from "../../presentation/redux/action-type"
import { Action } from "../../presentation/redux/actions"

export class ProductRepository {

    public fetchProducts() {
        return (dispatch: any) => {
            dispatch({
                type: ActionType.PRODUCTS_FETCHED,
                payload: mock.products
            })
        }
    }
}