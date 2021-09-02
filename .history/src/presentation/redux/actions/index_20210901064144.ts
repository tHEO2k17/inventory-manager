import { IProduct } from "../../../domain/dto/IProduct";
import { ActionType } from "../action-type";


interface GetProductAction {
    type: ActionType.GET_PRODUCTS,
}
interface AddProductAction {
    type: ActionType.ADD_PRODUCT,
    payload: IProduct
}

interface EditProductAction {
    type: ActionType.EDIT_PRODUCT,
    id: number,
    payload: IProduct
}

interface DeleteProductAction {
    type: ActionType.DELETE_PRODUCT,
    id: number
}

export type Action = GetProductAction | AddProductAction | EditProductAction | DeleteProductAction;