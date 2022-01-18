import React, {useEffect, useState} from 'react';
import CustomerNavBar from "./CustomerNavBar";
import {idToken} from "../idToken";


function BookingHistory() {
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

    function getAllHistory() {
        return bookings.filter(booking => booking.date != null)
            .map(booking => (
                <tr key={booking.documentId}>
                    <td>{booking.date}</td>
                    <td>{booking.customerEmail}</td>
                    <td>{booking.cleaningType}</td>
                    <td>{booking.address}</td>
                    <td>{booking.employeeEmail}</td>
                </tr>))
    }
    return (
        <div>
            <CustomerNavBar/>
            <h1 className={"text-center pt-4"}>Visa Bokade Städningar</h1>

            <div className={"justify-content-center d-flex pt-4"}>
                <table className="table w-75 p-3 ">
                    <thead>
                    <tr>
                        <th scope="col">Datum</th>
                        <th scope="col">Email</th>
                        <th scope="col">Städtyp</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Utförd Av</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getAllHistory()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookingHistory;