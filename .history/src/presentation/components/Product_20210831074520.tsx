import { Button } from "react-bootstrap"

const Product = (product: any) => {
    console.log("product", product);
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.name}</td>
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