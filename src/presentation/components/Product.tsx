import { Button } from "react-bootstrap"
import moment from 'moment';
import { IProduct } from "../../domain/dto/IProduct";
import { IPrice } from "../../domain/dto/IPrice";
import { useAppDispatch } from "../../core/hook";
import { deleteProduct } from "../slice/product";

const Product = ({ product }: ProductProps) => {

    const dispatch = useAppDispatch();

    const findLatestPriceInfo = (prices: IPrice[]): any => {
        return prices.reduce(
            (acc: any, value: any) =>
                moment(acc.date).isAfter(value.date)
                    ? acc
                    : value
        );
    }

    const handleDelete = (id: number) => {
        let confirmed = window.confirm("Are you sure you want to perform this action?");
        if (confirmed) {
            dispatch(deleteProduct(id))
        }
    }

    return (
        <tr>
            <td width="50%">{product.name}</td>
            <td>GHS {findLatestPriceInfo(product.prices!).price}</td>
            <td>GHS {findLatestPriceInfo(product.prices!).date}</td>
            <td width="15%">
                <Button size="sm" variant="outline-secondary">View</Button>
                <Button size="sm" variant="outline-secondary" className="mx-2">Edit</Button>
                <Button onClick={() => handleDelete(product.id)} size="sm" variant="outline-danger">Delete</Button>
            </td>
        </tr>
    );

}

export default Product;

type ProductProps = {
    key: any,
    product: IProduct
}