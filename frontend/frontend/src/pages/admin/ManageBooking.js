import React, {useEffect, useState} from 'react';
import AdminNavBar from "./AdminNavBar";
import 'react-calendar/dist/Calendar.css';
import {idToken} from "../idToken";
import {Dropdown} from "react-bootstrap";

let counter = 0;

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
    const [employees, setEmployee] = useState([])
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

    if(counter<1) {
        counter++;
        fetch('http://localhost:8080/getAllCustomers', {
            headers: {
                'Authorization': 'Bearer ' + idToken
            }
        })
            .then(req => req.json())
            .then(json => setEmployee(json))
    }

    function assignToEmployee(empEmail, customerBookings) {
        fetch('http://localhost:8080/createBooking', {
            mode: 'cors', method: 'post', headers: {
                'Authorization': 'Bearer ' + idToken,
                "Content-type": 'application/json',
                "Access-Control-Allow-Origin": "http://localhost:8080/"
            }, body: JSON.stringify({
                "address": customerBookings.address, "cleaningType": customerBookings.cleaningType, "customerEmail": customerBookings.documentId, "date": customerBookings.date,
                "documentId": customerBookings.documentId, "employeeEmail": empEmail, "grade": "", "status": "assigned"
            })

        })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });

        alert("Booking assigned to " + empEmail);
    }

    function getAllEmployees(customerBookings) {
        return employees.filter(employees => employees.role === "Employee")
            .map(employee => (
                <Dropdown.Item onClick={() => assignToEmployee(employee.email, customerBookings)}>{employee.email}</Dropdown.Item>))
    }

    function getAllBookings() {
        return customerBookings.filter(customerBookings => customerBookings.status !== "completed")
            .map(customerBookings => (
                <tr key={customerBookings.documentId}>
                    <td>{customerBookings.date}</td>
                    <td>{customerBookings.customerEmail}</td>
                    <td>{customerBookings.cleaningType}</td>
                    <td>{customerBookings.address}</td>
                    <td>
                        <div className={"d-flex justify-content-end gap-3"}>
                        <button type="button" className="btn btn-danger" onClick={() => deleteCustomerBooking(customerBookings.documentId)}>Avboka</button>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Tilldela
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {getAllEmployees(customerBookings)}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
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
                    {getAllBookings(customerBookings)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageBooking;