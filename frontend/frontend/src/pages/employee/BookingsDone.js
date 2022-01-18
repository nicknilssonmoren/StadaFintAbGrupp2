import React, {useEffect, useState} from 'react';
import EmployeeNavBar from "./EmployeeNavBar";
import {idToken} from "../idToken";

function BookingsDone() {
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
    function getAllFinishedBookings() {
        return bookings.filter(booking => booking.status === "completed")
            .map(booking => (
                    <li className="list-group-item list-group-item-success">Bokningen genomförd och fått betyg: {booking.grade}</li>
            ))
    }

    return (
            <div>
                <EmployeeNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <h5>Vid betyg: 0 är betyg ännu inte satt. Skalan går från 1-5, där 1 är lägst och 5 är högst.</h5>
                </div>
                <div className={"d-flex justify-content-center pt-5"}>
                    <ul className="list-group w-50">
                        {getAllFinishedBookings()}
                    </ul>
                </div>
            </div>
        );
}

export default BookingsDone;