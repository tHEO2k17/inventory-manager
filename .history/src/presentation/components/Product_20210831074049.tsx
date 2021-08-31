import { Button } from "react-bootstrap"

const Product = (product: any) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td><Button size="sm">View</Button> <Button>Edit</Button> <Button>Delete</Button></td>
        </tr>
    );

}

export default Product;