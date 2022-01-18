import React, {useEffect, useState} from 'react';
import EmployeeNavBar from "./EmployeeNavBar";
import {idToken} from "../idToken";

function AcceptBooking() {
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

    function respondToBooking(accepted, booking) {
        fetch('http://localhost:8080/createBooking', {
            mode: 'cors', method: 'post', headers: {
                'Authorization': 'Bearer ' + idToken,
                "Content-type": 'application/json',
                "Access-Control-Allow-Origin": "http://localhost:8080/"
            }, body: JSON.stringify({
                "address": booking.address, "cleaningType": booking.cleaningType, "customerEmail": booking.documentId, "date": booking.date,
                "documentId": booking.documentId, "employeeEmail": booking.employeeEmail, "grade": "", "status": accepted + " by employee"
            })

        })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
        window.location.reload()
    }

    function getAllBookings() {
        return bookings.filter(booking => booking.status == "assigned")
            .map(booking => (
                <>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex px-auto justify-content-between">
                        <h5 className="mb-1">Du har blivit tilldelad en {booking.cleaningType} städning.</h5>
                    </div>
                    <p>Datum: {booking.date}</p>
                    <p>Adress: {booking.address}</p>
                    <p>Kund: {booking.documentId}</p>
                    <p>Vänligen acceptera eller neka den tilldelade städningen.</p>
                    <div className={"d-flex justify-content-end gap-3"}>
                        <button type="button" className="btn btn-success mr-1" onClick={() => respondToBooking("accepted", booking)}>Acceptera</button>
                        <button type="button" className="btn btn-danger" onClick={() => respondToBooking("declined", booking)}>Neka</button>
                    </div>
                </a>
                </>))
    }
        return (
            <div>
                <EmployeeNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <div className="list-group w-50">
                        {getAllBookings()}
                    </div>
                </div>
            </div>
        );
}

export default AcceptBooking;