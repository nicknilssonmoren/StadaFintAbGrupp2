import React, {useEffect, useState} from 'react';
import CustomerNavBar from "./CustomerNavBar";
import {idToken} from "../idToken";
import {Dropdown} from "react-bootstrap";

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


    function giveGrade(grade, booking) {
        console.log(grade);
        fetch('http://localhost:8080/createBooking', {
            mode: 'cors', method: 'post', headers: {
                'Authorization': 'Bearer ' + idToken,
                "Content-type": 'application/json',
                "Access-Control-Allow-Origin": "http://localhost:8080/"
            }, body: JSON.stringify({
                "address": booking.address, "cleaningType": booking.cleaningType, "customerEmail": booking.documentId, "date": booking.date,
                "documentId": booking.documentId, "employeeEmail": booking.employeeEmail, "grade": grade, "status": booking.status
            })

        })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }

    function getHistoricBookings() {
        return bookings.filter(booking => booking.status == "completed")
            .map(booking => (
                <>
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex px-auto justify-content-between">
                            <h5 className="mb-1">{booking.cleaningType}städning utförd: {booking.date}</h5>
                        </div>
                        <p>Datum: {booking.date}</p>
                        <p>Adress: {booking.address}</p>
                        <p>Utförd av: {booking.employeeEmail}</p>
                        <p>Du gav betyget: {booking.grade}.</p>
                        <p>0 betyder att inget omdöme har satts.</p>
                        <div className={"d-flex justify-content-end gap-3"}>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Betygsätt
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => giveGrade(1, booking)}>1</Dropdown.Item>
                                    <Dropdown.Item onClick={() => giveGrade(2, booking)}>2</Dropdown.Item>
                                    <Dropdown.Item onClick={() => giveGrade(3, booking)}>3</Dropdown.Item>
                                    <Dropdown.Item onClick={() => giveGrade(4, booking)}>4</Dropdown.Item>
                                    <Dropdown.Item onClick={() => giveGrade(5, booking)}>5</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </a>
                </>))
    }

    return (
            <div>
                <CustomerNavBar/>
                <h1 className={"text-center pt-4"}>Historik</h1>
                <div className={"d-flex justify-content-center pt-5"}>
                    <div className="list-group w-50">
                        {getHistoricBookings()}
                    </div>
                </div>
            </div>
        );


function BookingHistory() {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/getAllBookings', {
            headers: {
                'Authorization': 'Bearer ' + idToken
            }
        })
            .then(req => req.json())
            .then(json => setBookings(json))
    }, [])

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
}

export default BookingHistory;