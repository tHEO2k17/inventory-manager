import { Component } from "react"
import { Table } from "react-bootstrap";
import { mock } from "../../core/mock";
import Product from "../components/Product";

export default class ProductsPage extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <Table>
                    <thead>
                        <tr>Name</tr>
                        <tr>Latest Price</tr>
                        <tr>Last Updated</tr>
                        <tr>Actions</tr>
                    </thead>
                    <tbody>
                        {
                            mock.products.map(product => <Product key={product.id} product={product} />)
                        }
                    </tbody>
                </Table>
            </>
        );
    }
}