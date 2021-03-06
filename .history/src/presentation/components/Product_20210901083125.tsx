import { Button } from "react-bootstrap"
import moment from 'moment';

const Product = ({ product }: ProductProps) => {

    console.log(product);

    const findLatestPriceInfo = (prices: any[]): any => {
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
            <td>{findLatestPriceInfo(product.prices).price}</td>
            <td>{findLatestPriceInfo(product.prices).date}</td>
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
    product: any
}