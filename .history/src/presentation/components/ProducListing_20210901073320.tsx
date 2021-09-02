import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { IProduct } from "../../domain/dto/IProduct";
import EmptyRow from "./EmptyRow";
import Product from "./Product";
import * as actionCreators from '../redux/action-creators';
import { State } from "../redux/reducers";

const ProductListing = () => {

    const dispatch = useDispatch();
    const { fetchProducts } = bindActionCreators(actionCreators, dispatch);
    const products = useSelector((state: State) => state.products);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts, products]);

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
                {
                    products
                        ? <EmptyRow />
                        : products.map((product: IProduct) => <Product key={product.id} product={product} />)
                }
            </tbody>
        </Table>
    );
}

export default ProductListing;