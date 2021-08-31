import { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class ProductForm extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter product price" />
                </Form.Group>

                <Form.Group>
                    <Button variant="outline-danger" className="me-2">Cancel</Button>
                    <Button variant="success">Add</Button>
                </Form.Group>

            </Form>
        );
    }
}