import React, {useEffect, useState} from 'react';
import AdminNavBar from "./CustomerNavBar";
import {idToken} from "../idToken";

function deleteBooking(documentId) {
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

function ShowBookings() {
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
    fetch('http://localhost:8080/getAllBookings', {
    headers: {
        'Authorization': 'Bearer ' + idToken
    }
    })
    .then(req => req.json())
    .then(json => setBookings(json))
    },[])

    function getAllBookings() {
        return bookings.filter(booking => booking.date != null)
            .map(booking => (
                <tr key={booking.documentId}>
                    <td>{booking.date}</td>
                    <td>{booking.customerEmail}</td>
                    <td>{booking.cleaningType}</td>
                    <td>{booking.address}</td>
                    <div className={"d-flex justify-content-end gap-3"}>
                    <td><button type="button" className="btn btn-success mr-1" onClick={() => deleteBooking(booking.documentId)}>Avboka</button></td>
                    </div>
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

export default ShowBookings;