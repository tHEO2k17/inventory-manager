import { Button } from "react-bootstrap"

const Product = (product: any) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td>
                <Button size="sm" variant="outline-secondary">View</Button>
                <Button size="sm" variant="outline-secondary">Edit</Button>
                <Button size="sm" variant="outline-secondary">Delete</Button>
            </td>
        </tr>
    );

}

export default Product;