import { mock } from "../../core/mock"
import { ActionType } from "../../presentation/redux/action-type"

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