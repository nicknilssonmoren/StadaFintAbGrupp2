import {idToken} from "../idToken";
import {useEffect, useState} from "react";

export default async function GetAllCustomers(email) {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/getAllCustomers', {
            headers: {
                'Authorization': 'Bearer ' + idToken
            }
        })
            .then(req => req.json())
            .then(json => setCustomers(json))
    }, [])

    console.log(customers);
    return customers.filter(customer => customer.email === email)
        .map(customer => (
            customer.address
        ))
}