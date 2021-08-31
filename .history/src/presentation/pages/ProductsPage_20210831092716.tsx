import { Component } from "react"
import { Card, Container, Table } from "react-bootstrap";
import { mock } from "../../core/mock";
import Banner from "../components/Banner";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";
import TopBar from "../components/TopBar";

export default class ProductsPage extends Component {
    // constructor(props: any) {
    //     super(props);
    // }

    render() {
        return (
            <>
            <TopBar/>
            <Banner/>
            <Container>
                <Card className="mtn-30">
                    <Card.Body>

                    </Card.Body>
                </Card>
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
            </>
        );
    }
}