import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const ProductForm = () => {

    const [formData, setFormData] = useState({});

    const handleOnFormFieldChange = (e: any) => {
        setFormData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e: any) => handleOnFormFieldChange(e)} name="name" placeholder="eg. Paracetamol" />
            </Form.Group>

            <Row>
                <Form.Group as={Col} md="4" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" onChange={(e: any) => handleOnFormFieldChange(e)} name="price" placeholder="eg. 3.00" />
                </Form.Group>
            </Row>

            <Form.Group className="text-right float-end">
                <Button variant="link" type="reset" className="me-2 text-warning">Clear Form</Button>
                <Button variant="success" type="button" className="px-4" onClick={handleSubmit}>Add</Button>
            </Form.Group>

        </Form>
    );
}

export default ProductForm;