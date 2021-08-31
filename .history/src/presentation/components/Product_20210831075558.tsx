import { Button } from "react-bootstrap"

const Product = ({ product }: ProductProps) => {

    const getLatestPrice = (prices: any[]) => {
        return prices.filter(e => {
            console.log(e);
            return '0.00';
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