import React, {useState, useEffect} from 'react';
import AdminNavBar from "./AdminNavBar";

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDZmMzc1MjI0N2ZjZjk0Y2JlNWQyZDZiNTlmYThhMmJhYjFlYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhZGFmaW50LTRiZTM1IiwiYXVkIjoic3RhZGFmaW50LTRiZTM1IiwiYXV0aF90aW1lIjoxNjQxOTgzMTY4LCJ1c2VyX2lkIjoiMXdxVzVsNk9mVlZCdktRYWR1Wk54azdHUlBUMiIsInN1YiI6IjF3cVc1bDZPZlZWQnZLUWFkdVpOeGs3R1JQVDIiLCJpYXQiOjE2NDE5ODMxNjgsImV4cCI6MTY0MTk4Njc2OCwiZW1haWwiOiJoZW5yaWtAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImhlbnJpa0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.KF_4qEVdJumV16C1JZZjB3QhnD9qur3LzRi3rRBIdVghBhtQPyjETaq2wcHpGSKeiO-dmlfQz3ZMrLTozmgkecSjva7C0_h4C-FZ-FaE1msWZM9SuvW6s3awCxJgtw-WEd41y2LjmgYm6e2ejFp9pPb_YYvRSdoadwXwNEC3mTgB8T4QoxMiN-GGROaTkFbdrmWElmix_V0cFJY2M6-ytym5jrPeMZmiXGkv78153ZUHLpuBQ--sQnT3TTsh_PicobXAf065HIufWVVdtQWf_PLoZgazEfr9x4NA_Gh9Uo0mSBXroQxCcI_4YRtkTiwCdycgVuMwXxPNvp9DYOrWiQ"
function ManageCustomer() {
    const [customers, setCustomers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/getAllCustomers', {
            headers: {
                'Authorization': 'Bearer ' + idToken
            }
        })
            .then(req => req.json())
            .then(json => setCustomers(json))
    },[])

    function getAllCustomers() {
        console.log(customers);
        return customers.filter(customer => customer.role === "Customer")
            .map(customer => (
            <tr key={customer.documentId}>
                <th scope="row">{customer.documentId}</th>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
            </tr>))
    }

    return (<>
        <div>
            <AdminNavBar/>
            <h1 className={"text-center pt-4"}>Kundlista</h1>
            <div className={"justify-content-center d-flex pt-4"}>
                <table className="table w-75 p-3 ">
                    <thead>
                    <tr>
                        <th scope="col">Kund ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Adress</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getAllCustomers()}
                    </tbody>
                </table>
            </div>
        </div>
        </>);
}

export default ManageCustomer;