import { mock } from "../../core/mock"
import { IProduct } from "../dto/IProduct";

export default class ProductRepository {

    public static fetchProducts(): any {
        return mock.products;
    }

    public static addProduct(product: IProduct) {
        return;
    }

    public static editProduct(id: number, product: IProduct) {
        return;
    }

    public static deleteProduct(id: number) {
        return;
    }
}