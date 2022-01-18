import React, {useEffect, useState} from 'react';
import EmployeeNavBar from "./EmployeeNavBar";
import {idToken} from "../idToken";

function Canceled() {
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

    function getCanceledBookings() {
        return bookings.filter(booking => booking.status == "canceled")
            .map(booking => (
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex px-auto justify-content-between">
                        <h5 className="mb-1">Din bokning {booking.date} har blivit avbokad.</h5>
                        <small className="text-muted">1 days ago</small>
                    </div>
                    <p>{booking.cleaningType}städning, {booking.date} har blivit avbokad. Kontakta Administratör för mer information.</p>
                </a>
            ))
    }
    return (
            <div>
                <EmployeeNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <div className="list-group w-50">
                        {getCanceledBookings()}
                    </div>
                </div>
            </div>
        );
}
export default Canceled;