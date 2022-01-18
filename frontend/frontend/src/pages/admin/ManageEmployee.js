import React, {useState, useEffect} from 'react';
import AdminNavBar from "./AdminNavBar";
import {idToken} from "../idToken";

function deleteEmployee(documentId) {
    fetch('http://localhost:8080/deleteCustomer?documentId=' + documentId, {
        mode: 'cors', method: 'delete', headers: {
            'Authorization': 'Bearer ' + idToken,
            "Access-Control-Allow-Origin": "http://localhost:8080/"
        }
    })
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
    window.location.reload()
}

function ManageEmployee() {
    const [customers, setCustomers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/getAllCustomers', {
            headers: {
                'Authorization': 'Bearer ' + idToken
            }
        })
            .then(req => req.json())
            .then(json => setCustomers(json))
    },[])

    function getAllEmployees() {
        console.log(customers);
        return customers.filter(customer => customer.role === "Employee" || customer.role === "Admin")
            .map(customer => (
                <tr key={customer.documentId}>
                    <th scope="row">{customer.documentId}</th>
                    <td>{customer.email}</td>
                    <td>{customer.address}</td>
                    <div className={"d-flex justify-content-end gap-3"}>
                        <button type="button" className="btn btn-danger" onClick={() => deleteEmployee(customer.documentId)}>Ta bort</button>
                    </div>
                </tr>))
    }

    return (<>
        <div>
            <AdminNavBar/>
            <h1 className={"text-center pt-4"}>Kundlista</h1>
            <div className={"justify-content-center d-flex pt-4"}>
                <table className="table w-75 p-3 ">
                    <thead>
                    <tr>
                        <th scope="col">Kund ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Adress</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getAllEmployees()}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default ManageEmployee;