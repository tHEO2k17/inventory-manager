import { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class ProductForm extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter product price" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Button>Cancel</Button>
                    <Button>Add</Button>
                </Form.Group>

            </Form>
        );
    }
}