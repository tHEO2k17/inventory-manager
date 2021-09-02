import { IPrice } from "../dto/IPrice";
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
            prices: this.addPrices(product.prices)
        }

        storage.products ? storage.products.push(product) : storage.products = [product];
        localStorage.setItem('PRODUCTS', JSON.stringify(storage));
    }

    public static editProduct(id: number, product: IProduct) {
        return;
    }

    public static deleteProduct(id: number) {
        return;
    }

    private static addPrices(prices: IPrice[]) {
        return prices.map(price => {
            price.id = this.generateId(prices);
            return price;
        })
    }

    private static generateId(data: any[]): number {
        let item = data ? data[data.length - 1] : [];
        return item != null ? item.id + 1 : 0;
    }
}