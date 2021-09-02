import { Dispatch } from "redux"
import { IProduct } from "../../../domain/dto/IProduct"
import { ActionType } from "../action-type"
import { Action } from "../actions"

export const fetchProducts = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.GET_PRODUCTS })
    }
}

export const addProduct = (product: IProduct) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_PRODUCT,
            payload: product
        })
    }
}

export const editProduct = (id: number, product: IProduct) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.EDIT_PRODUCT,
            id,
            payload: product
        })
    }
}

export const deleteProduct = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_PRODUCT,
            id: id,
        })
    }
}