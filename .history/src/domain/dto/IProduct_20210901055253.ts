import { IPrice } from "./IPrice";

export interface IProduct{
    id: number,
    name: string,
    prices?: IPrice[]
}