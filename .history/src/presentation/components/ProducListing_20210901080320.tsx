import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../domain/dto/IProduct";
import { getProducts } from "../slice/product";
import EmptyRow from "./EmptyRow";
import Product from "./Product";

const ProductListing = () => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(getProducts);

        // console.log(state);
        // setProducts(state.products);
        // fetchProducts();
    });

    const renderTableRows = (): any => {
        products.map((product: IProduct) => <Product key={product.id} product={product} />);
    }

    return (
        <Table striped className="mt-5">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Latest Price</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { products ? <EmptyRow /> : renderTableRows() }
            </tbody>
        </Table>
    );
}

export default ProductListing;