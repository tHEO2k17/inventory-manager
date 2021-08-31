import { Button, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
    return (
        <section className="bg-success">
            <Container className="py-4 text-white">
                <Row>
                    <Col>
                        <h3>Products</h3>
                        <p className="text-light mt-3 fw-light fs-6">HOME / PRODUCTS</p>
                    </Col>
                    <Col>
                        <Button variant="outline-light">+ Add Product</Button>
                    </Col>
                </Row>

            </Container>
        </section>
    );
}

export default Banner;