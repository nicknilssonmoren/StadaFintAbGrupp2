import {useEffect, useState} from "react";

function Customer() {
    const [customers, setCustomers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/getCustomerDetails?documentId=James")
            .then(req => req.json())
            .then(json => setCustomers(json))
    },[])
    return (
        <div className="Customer">
            <h3>Get Test</h3>
                <div>
                    {customers.name}<br></br>
                    {customers.age}<br></br>
                    {customers.gender}<br></br>
                    {customers.documentId}<br></br>
                    {console.log(customers)}
                </div>
        </div>);
}

export default Customer;