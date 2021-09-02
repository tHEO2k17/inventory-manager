import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useAppSelector } from "../../core/hook";
import { IProduct } from "../../domain/dto/IProduct";
import EmptyRow from "./EmptyRow";
import Product from "./Product";

const ProductListing = () => {

    const products = useAppSelector(state => state.productsResponse.products);

    console.log(products);

    const renderTableRows = (): any => {
        products.map((product: IProduct) => {
            // console.log(product);
            return <Product key={product.id} product={product} />
        });
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
                {products.length <= 0 ? <EmptyRow /> : renderTableRows()}
            </tbody>
        </Table>
    );
}

export default ProductListing;