import { Button } from "react-bootstrap"
import moment from 'moment';

const Product = ({ product }: ProductProps) => {

    const getLatestPriceInfo = (prices: any[]): any => {
        let latest: any;
        prices.filter(e => {

            console.log(latest);

            if(latest){
                if(moment(latest.date).isBefore(e.date)){
                    latest = e;
                }
            }
            latest = e;
        });

        return latest;
    }

    console.log("product", product);
    return (
        <tr>
            <td>{product.name}</td>
            <td>{getLatestPriceInfo(product.prices).price}</td>
            <td>{getLatestPriceInfo(product.prices).date}</td>
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