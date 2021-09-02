import { Table } from "react-bootstrap";
import { useAppSelector } from "../../core/hook";
import { IProduct } from "../../domain/dto/IProduct";
import EmptyRow from "./EmptyRow";
import Product from "./Product";

const ProductListing = () => {

    const data = useAppSelector(state => state.productsResponse);

    const renderTableRows = (): any => {
        data.products.map((product: IProduct) => <Product key={product.id} product={product} />);
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
                {data ? <EmptyRow /> : renderTableRows()}
            </tbody>
        </Table>
    );
}

export default ProductListing;