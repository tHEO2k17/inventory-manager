import { Component } from "react"
import { connect } from "react-redux";
import { Button, Card, Col, Container, FormControl, InputGroup, Pagination, Row, Table } from "react-bootstrap";
import Banner from "../components/Banner";
import Product from "../components/Product";
import TopBar from "../components/TopBar";
import { IProduct } from "../../domain/dto/IProduct";
import EmptyRow from "../components/EmptyRow";

class ProductsPage extends Component<ReduxType> {

    render() {

        const { products } = this.props;

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
                    <Table striped className="mt-5 min-h-50">
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
                                products
                                ? <EmptyRow/>
                                : products.map((product: IProduct) => <Product key={product.id} product={product} />)
                            }
                        </tbody>
                    </Table>
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

const mapStateToProps = (state: any) => {
    const { products } = state.productsData;
    return { products };
}
type ReduxType = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(ProductsPage);