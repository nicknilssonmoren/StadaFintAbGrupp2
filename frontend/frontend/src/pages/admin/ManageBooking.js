import React, {useEffect, useState} from 'react';
import AdminNavBar from "./AdminNavBar";
import 'react-calendar/dist/Calendar.css';
import {idToken} from "../idToken";

function deleteCustomerBooking(documentId) {
    fetch('http://localhost:8080/deleteBooking?documentId=' + documentId, {
        mode: 'cors', method: 'delete', headers: {
            'Authorization': 'Bearer ' + idToken,
            "Access-Control-Allow-Origin": "http://localhost:8080/"
        }
    })
        //.then(json)
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
    window.location.reload()
}

function ManageBooking() {
    const [customerBookings, setCustomerBookings] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/getAllBookings', {
            headers: {
                'Authorization': 'Bearer ' + idToken,
                "Access-Control-Allow-Origin": "http://localhost:8080/"

            }
        })
            .then(req => req.json())
            .then(json => setCustomerBookings(json))
    },[])

    function getAllBookings() {
        return customerBookings.filter(customerBookings => customerBookings.date != null)
            .map(customerBookings => (
                <tr key={customerBookings.documentId}>
                    <td>{customerBookings.date}</td>
                    <td>{customerBookings.customerEmail}</td>
                    <td>{customerBookings.cleaningType}</td>
                    <td>{customerBookings.address}</td>
                    <td>
                        <div className={"d-flex justify-content-end gap-3"}>
                        <button type="button" className="btn btn-danger" onClick={() => deleteCustomerBooking(customerBookings.documentId)}>Avboka</button><button type="button" className="btn btn-success mr-1">Tilldela</button>
                        </div>
                        {/*
                        TODO:
                        Tilldela städning till anställd
                        kanske ladda in en ny komponent där man kan välja
                        vilken anställd som ska få städningen.
                        */}
                    </td>
                </tr>))
    }
    return (
        <div>
            <AdminNavBar/>
            <h1 className={"text-center pt-4"}>Visa Bokade Städningar</h1>

            <div className={"justify-content-center d-flex pt-4"}>
                <table className="table w-75 p-3 ">
                    <thead>
                    <tr>
                        <th scope="col">Datum</th>
                        <th scope="col">Email</th>
                        <th scope="col">Städtyp</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Åtgärder</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getAllBookings()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageBooking;