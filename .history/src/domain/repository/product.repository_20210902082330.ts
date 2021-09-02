import { IProduct } from "../dto/IProduct";
import { IResponse } from "../dto/IResponse";

export default class ProductRepository {

    public static fetchProducts(): IResponse {
        let products = localStorage.getItem('PRODUCTS') || '{}';
        return JSON.parse(products);
    }

    public static addProduct(product: IProduct) {
        console.log(product);
        return;
    }

    public static editProduct(id: number, product: IProduct) {
        return;
    }

    public static deleteProduct(id: number) {
        return;
    }
}