import { Component } from "react"
import { Container, Table } from "react-bootstrap";
import { mock } from "../../core/mock";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";

export default class ProductsPage extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Container>
                <ProductForm/>
                <br/>
                <Table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Latest Price</td>
                            <td>Last Updated</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mock.products.map(product => <Product key={product.id} product={product} />)
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
}