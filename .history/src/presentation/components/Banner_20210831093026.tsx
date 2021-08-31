import { Button, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
    return (
        <section className="bg-success">
            <Container className="py-5 text-white">
                <Row className="align-items-center">
                    <Col>
                        <h2>Products</h2>
                        <p className="text-light mt-3 fw-light fs-6">HOME / PRODUCTS</p>
                    </Col>
                    <Col>
                        <Button variant="outline-light" className="float-end">+ Add Product</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;