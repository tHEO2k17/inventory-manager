import { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export default class ProductForm extends Component {
    // constructor(props: any) {
    //     super(props);
    // }

    render() {
        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" />
                </Form.Group>

                <Row>
                    <Form.Group as={Col} md="4" className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="eg. 3.00" />
                    </Form.Group>
                </Row>


                <Form.Group className="text-right float-end">
                    <Button variant="link" className="me-2 text-danger">Cancel</Button>
                    <Button variant="success" className="px-4">Add</Button>
                </Form.Group>

            </Form>
        );
    }
}