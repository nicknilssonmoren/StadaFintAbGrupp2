import React, {useState, useEffect} from 'react';
import AdminNavBar from "./AdminNavBar";

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDZmMzc1MjI0N2ZjZjk0Y2JlNWQyZDZiNTlmYThhMmJhYjFlYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhZGFmaW50LTRiZTM1IiwiYXVkIjoic3RhZGFmaW50LTRiZTM1IiwiYXV0aF90aW1lIjoxNjQxOTEyNTk1LCJ1c2VyX2lkIjoiOHpXQkdJN0tLdGFIS0dWWkc0Ym5ESUQzb0NFMiIsInN1YiI6Ijh6V0JHSTdLS3RhSEtHVlpHNGJuRElEM29DRTIiLCJpYXQiOjE2NDE5MTI1OTUsImV4cCI6MTY0MTkxNjE5NSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdDFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.NZvdRgZYonIH3E4Oan6vamixSQ2GvPH4PcNQ9eevT2b2pgAdbtq88HYvBYWLAR28iUFWmjjoBfvYinMJohoEbe3hEcSfhjMudp7bLlBbOsWXIbhag1Gknrad9MXh9GAJ3tOzhKb0_Y1Z3g_9jngn7KrHXa7b43cZRA9mn3jIirHK3UJF1kWpujRYK4DCX3qAklGiWEFIcXUr7JVn8gL2YX6y_ccqR6VGSITbNgWSDUOdZI80e8hcW43GmstTPodJsBWX-w7ehuSYM82XKgsGwTmHkI5xICjD4LnvczMrNjJx47FBqIZ5ypZJWVQ_IcnS7xE8S-XSyYdVmKGp4d48Yg"
function TestCustomer() {
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
        return customers.filter(customer => customer.role == "Customer")
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

export default TestCustomer;