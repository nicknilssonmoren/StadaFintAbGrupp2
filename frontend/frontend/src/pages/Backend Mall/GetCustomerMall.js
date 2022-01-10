import {useEffect, useState} from "react";

function GetCustomerMall() {
    const [customers, setCustomers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/getCustomerDetails?documentId=lava@gmail.com")
            .then(req => req.json())
            .then(json => setCustomers(json))
    },[])
    return (
        <div className="Customer">
            <h3>Get Test</h3>
                <div>
                    {customers.documentId}<br></br>
                    {customers.password}<br></br>
                    {customers.role}<br></br>
                    {console.log(customers)}
                </div>
        </div>);
}

export default GetCustomerMall;