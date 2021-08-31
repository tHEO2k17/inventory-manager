import { Button } from "react-bootstrap"
import moment from 'moment';

const Product = ({ product }: ProductProps) => {

    const getLatestPrice = (prices: any[]) => {
        let latest: any;
        return prices.filter(e => {

            if(latest != null && moment(latest.date).isBefore(e.date)){
                latest = e;
            }
            
            console.log(latest);
            return 0.00;
        });
    }

    console.log("product", product);
    return (
        <tr>
            <td>{product.name}</td>
            <td>{getLatestPrice(product.prices)}</td>
            <td>{product.name}</td>
            <td>
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