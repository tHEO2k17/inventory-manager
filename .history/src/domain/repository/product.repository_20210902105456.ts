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
            prices: this.setPrices(product.prices)
        }

        storage.products ? storage.products.push(product) : storage.products = [product];
        localStorage.setItem('PRODUCTS', JSON.stringify(storage));
    }

    public static editProduct(id: number, product: IProduct) {
        return;
    }

    public static deleteProduct(id: number) {
        let storage: IResponse = this.fetchProducts();
        var item = storage.products.findIndex(d => d.id === id);
        console.log(item);

        if(item !== -1){
            storage.products.splice(item, 1);
            localStorage.setItem('PRODUCTS', JSON.stringify(storage));
        }
    }

    private static setPrices(prices: IPrice[]) {
        return prices.map(price => {
            price.id = this.generateId(prices) || 0;
            return price;
        })
    }

    private static generateId(data: any[]): number {
        let item = data ? data[data.length - 1] : [];
        return item != null ? item.id + 1 : 0;
    }
}