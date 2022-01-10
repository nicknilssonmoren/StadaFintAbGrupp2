import React, {Component} from 'react';
import AdminNavBar from "./AdminNavBar";

class ManageCustomer extends Component {

    render() {
        return (
            <div>
                <AdminNavBar/>
                <h1 className={"text-center pt-4"}>Kundlista</h1>
                <div className={"justify-content-center d-flex pt-4"}>
                    <table className="table w-75 p-3 ">
                        <thead>
                        <tr>
                            <th scope="col">Kund ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Adress</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ManageCustomer;