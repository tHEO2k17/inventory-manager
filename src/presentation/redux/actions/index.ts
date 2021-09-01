import { IProduct } from "../../../domain/dto/IProduct";
import { ActionType } from "../action-type";

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

export type Action = AddProductAction | EditProductAction | DeleteProductAction;