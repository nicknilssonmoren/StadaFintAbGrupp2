import React, {useEffect, useState} from 'react';
import AdminNavBar from "./CustomerNavBar";
import {idToken} from "../idToken";

function deleteBooking(booking) {
    fetch('http://localhost:8080/createBooking', {
        mode: 'cors', method: 'post', headers: {
            'Authorization': 'Bearer ' + idToken,
            "Content-type": 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:8080/"
        }, body: JSON.stringify({
            "address": booking.address, "cleaningType": booking.cleaningType, "customerEmail": booking.documentId, "date": booking.date,
            "documentId": booking.documentId, "employeeEmail": booking.employeeEmail, "grade": booking.grade, "status": "canceled"
        })

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
        return bookings.filter(booking => booking.status === "assigned" || booking.status === "booked")
            .map(booking => (
                <tr key={booking.documentId}>
                    <td>{booking.date}</td>
                    <td>{booking.customerEmail}</td>
                    <td>{booking.cleaningType}</td>
                    <td>{booking.address}</td>
                    <div className={"d-flex justify-content-end gap-3"}>

                    <td><button type="button" className="btn btn-danger mr-1" onClick={() => deleteBooking(booking)}>Avboka</button></td>

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