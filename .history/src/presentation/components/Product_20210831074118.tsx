import { Button } from "react-bootstrap"

const Product = (product: any) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td><Button size="sm" variant="outline-default">View</Button> <Button size="sm" variant="outline-default">Edit</Button> <Button size="sm" variant="outline-default">Delete</Button></td>
        </tr>
    );

}

export default Product;