import React, {useState, useEffect} from 'react';
import AdminNavBar from "./AdminNavBar";
import {idToken} from "../idToken";

function ManageCustomer() {
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

    function getAllCustomers() {
        console.log(customers);
        return customers.filter(customer => customer.role === "Customer")
            .map(customer => (
            <tr key={customer.documentId}>
                <th scope="row">{customer.documentId}</th>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <button>Redigera</button>
                {/*
                        TODO:
                        Button redigera/hantera behöver implementeras
                        */}
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
                    {getAllCustomers()}
                    </tbody>
                </table>
            </div>
        </div>
        </>);
}

export default ManageCustomer;