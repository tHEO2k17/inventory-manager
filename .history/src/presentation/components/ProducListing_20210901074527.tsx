import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
import { IProduct } from "../../domain/dto/IProduct";
import EmptyRow from "./EmptyRow";
import Product from "./Product";
// import * as actionCreators from '../redux/action-creators';
import { State } from "../redux/reducers";
import { fetchProducts } from "../redux/action-creators";

const ProductListing = () => {

    const dispatch = useDispatch();
    // const { fetchProducts } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state: State) => state.productState);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts);

        console.log(state);
        setProducts(state.products);
        // fetchProducts();
    }, [dispatch, state]);

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