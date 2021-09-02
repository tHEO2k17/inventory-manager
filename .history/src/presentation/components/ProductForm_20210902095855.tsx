import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useAppDispatch } from "../../core/hook";
import { addProduct } from "../slice/product";

const ProductForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        let formData = new FormData();

        formData.append('name', name);
        formData.set('prices[]', price);

        console.log(formData.entries());

        // dispatch(addProduct(formData));
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e: any) => setName(e.target.value)} name="name" placeholder="eg. Paracetamol" />
            </Form.Group>

            <Row>
                <Form.Group as={Col} md="4" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" onChange={(e: any) => setPrice(e.target.value)} name="price" placeholder="eg. 3.00" />
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