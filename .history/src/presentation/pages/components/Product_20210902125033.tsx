import { Button } from "react-bootstrap"
import moment from 'moment';
import { useAppDispatch } from "../../../core/hook";
import { IPrice } from "../../../domain/dto/IPrice";
import { IProduct } from "../../../domain/dto/IProduct";
import { deleteProduct } from "../../slice/product";

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
            <td>{findLatestPriceInfo(product.prices!).date}</td>
            <td width="15%">
                <Button size="sm" variant="link" className="mx-2">Edit</Button>
                <Button onClick={() => handleDelete(product.id)} size="sm" variant="link" className="text-danger">Delete</Button>
            </td>
        </tr>
    );

}

export default Product;

type ProductProps = {
    key: any,
    product: IProduct
}