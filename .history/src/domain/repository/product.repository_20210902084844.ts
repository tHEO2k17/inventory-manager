import { IProduct } from "../dto/IProduct";
import { IResponse } from "../dto/IResponse";

export default class ProductRepository {

    public static fetchProducts(): IResponse {
        let products = localStorage.getItem('PRODUCTS') || '{}';
        return JSON.parse(products);
    }

    public static addProduct(product: IProduct) {
        var storage = this.fetchProducts();
        product.id = this.generateId(storage);
        console.log("Storage", storage);
        storage.products.push(product);
        // storage.push(product);
        // localStorage.setItem(key, JSON.stringify(storage));
        console.log(product);
        return;
    }

    public static editProduct(id: number, product: IProduct) {
        return;
    }

    public static deleteProduct(id: number) {
        return;
    }

    private static generateId(response: IResponse): number {
        let products = response.products || [];
        let item = products[products.length - 1];
        return item != null ? item.id + 1 : 0;
    }
}