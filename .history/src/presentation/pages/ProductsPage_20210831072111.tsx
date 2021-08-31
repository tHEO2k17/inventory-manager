import { Component } from "react"
import { Table } from "react-bootstrap";

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
                </Table>
            </>
        );
    }
}