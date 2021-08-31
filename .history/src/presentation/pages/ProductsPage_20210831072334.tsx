import { Component } from "react"
import { Table } from "react-bootstrap";
import { mock } from "../../core/mock";

export default class ProductsPage extends Component {
    constructor(props: any){
        super(props);
    }

    render(){
        return (
            <>
                <Table>
                    <thead>
                        <tr>Name</tr>
                        <tr>Latest Price</tr>
                        <tr>Last Updated</tr>
                        <tr>Actions</tr>
                    </thead>
                    <tbody>
                        {
                            mock.products.map(product =>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.name}</td>
                                    <td>{product.name}</td>
                                    <td>View | Edit | Delete</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </>
        );
    }
}