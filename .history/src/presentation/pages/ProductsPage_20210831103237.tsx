import { Component } from "react"
import { Button, Card, Col, Container, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { mock } from "../../core/mock";
import Banner from "../components/Banner";
import Product from "../components/Product";
import TopBar from "../components/TopBar";

export default class ProductsPage extends Component {
   
    render() {
        return (
            <>
                <TopBar />
                <Banner />
                <Container>
                    <Card className="mtn-40 border-0 shadow-sm">
                        <Card.Body className="my-4">
                            <Row>
                                <Col md="4" className="offset-8">
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Searching for..."
                                            aria-label="Searching for..."
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="outline-secondary" id="button-addon2"> Search</Button>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Table className="mt-5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Latest Price</th>
                                <th>Last Updated</th>
                                <th>Actions</th>
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