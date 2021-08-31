import { Button } from "react-bootstrap"

const Product = (product: any) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td><Button size="sm" variant="outline-light">View</Button> <Button size="sm" variant="outline-light">Edit</Button> <Button size="sm" variant="outline-light">Delete</Button></td>
        </tr>
    );

}

export default Product;