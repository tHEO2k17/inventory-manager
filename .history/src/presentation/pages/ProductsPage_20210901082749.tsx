import { Component } from "react"
import { Button, Card, Col, Container, FormControl, InputGroup, Pagination, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import TopBar from "../components/TopBar";
import ProductListing from "../components/ProductListing";

class ProductsPage extends Component {
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
                    <ProductListing />
                    <Pagination className="mt-5 d-flex justify-content-center">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Container>
            </>
        );
    }
}

export default ProductsPage;