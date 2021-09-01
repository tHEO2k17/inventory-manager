import { mock } from "../../core/mock"
import { ActionType } from "../../presentation/redux/action-type"

export default class ProductRepository {
     
    public static fetchProducts() {
        return (dispatch: any) => {
            dispatch({
                type: ActionType.PRODUCTS_FETCHED,
                payload: mock.products
            })
        }
    }
}