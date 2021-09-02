import { IProduct } from "../dto/IProduct";
import { IResponse } from "../dto/IResponse";

export default class ProductRepository {

    public static fetchProducts(): IResponse {
        let products = localStorage.getItem('PRODUCTS') || '{}';
        return JSON.parse(products);
    }

    public static addProduct(product: IProduct) {
        let storage: IResponse = this.fetchProducts();
        product = {
            ...product,
            id: this.generateId(storage.products),
            prices: product.prices.map(price => {
                price.id = this.generateId(product.prices);
                return price;
            })
        }

        console.log(product);

        // storage.products ? storage.products.push(product) : storage.products = [product];
        // localStorage.setItem('PRODUCTS', JSON.stringify(storage));
        return;
    }

    public static editProduct(id: number, product: IProduct) {
        return;
    }

    public static deleteProduct(id: number) {
        return;
    }

    private static addPrices() {

    }

    private static generateId(data: any[]): number {
        let item = data ? data[data.length - 1] : [];
        if (item) return item.id ? item.id + 1 : 0;
        return item != null ? item.id + 1 : 0;
    }
}