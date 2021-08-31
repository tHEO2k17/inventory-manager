import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

const Banner = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className="bg-success">
                <Container className="py-5 text-white">
                    <Row className="align-items-center">
                        <Col>
                            <h2>Products</h2>
                            <p className="text-light mt-3 fw-light fs-6">HOME / PRODUCTS</p>
                        </Col>
                        <Col>
                            <Button variant="outline-light" className="float-end" onClick={handleShow}>+ Add Product</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Banner;