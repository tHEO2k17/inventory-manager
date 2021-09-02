import { useEffect } from "react";
import { Button } from "react-bootstrap"
import moment from 'moment';
import { IProduct } from "../../domain/dto/IProduct";
import { IPrice } from "../../domain/dto/IPrice";

const Product = ({ product }: ProductProps) => {

    useEffect(() => {
        console.log(product);
    });

    const findLatestPriceInfo = (prices: IPrice[]): any => {
        return prices.reduce(
            (acc: any, value: any) =>
                moment(acc.date).isAfter(value.date)
                    ? acc
                    : value
        );
    }

    return (
        <tr>
            <td width="50%">{product.name}</td>
            {/* <td>{findLatestPriceInfo(product.prices).price}</td>
            <td>{findLatestPriceInfo(product.prices).date}</td> */}
            <td width="15%">
                <Button size="sm" variant="outline-secondary">View</Button>
                <Button size="sm" variant="outline-secondary" className="mx-2">Edit</Button>
                <Button size="sm" variant="outline-danger">Delete</Button>
            </td>
        </tr>
    );

}

export default Product;

type ProductProps = {
    key: any,
    product: IProduct
}