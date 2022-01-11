import React, {useState, useEffect} from 'react';
import AdminNavBar from "./AdminNavBar";

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDZmMzc1MjI0N2ZjZjk0Y2JlNWQyZDZiNTlmYThhMmJhYjFlYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhZGFmaW50LTRiZTM1IiwiYXVkIjoic3RhZGFmaW50LTRiZTM1IiwiYXV0aF90aW1lIjoxNjQxOTMzODYzLCJ1c2VyX2lkIjoicXFaaUhyTDRiNk1nUlRIUTlOV05ZZEd3OFhUMiIsInN1YiI6InFxWmlIckw0YjZNZ1JUSFE5TldOWWRHdzhYVDIiLCJpYXQiOjE2NDE5MzM4NjMsImV4cCI6MTY0MTkzNzQ2MywiZW1haWwiOiJuaWNrQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuaWNrQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Xl7ppmpoJZNK4iO0p6prjAHCm78ChVvGS1aPvzh_lUqrUgiuW6i526Wcf2pglFBdjvbWL4ZzxGjspVJQNzo2-6jDAEfXnS1aGITH9gFPlIkQxESP5KlV8l_g-B8owWloNZHrADojbz9A_-T5fY73l4_MGeW8-ugOKPxqUUtQSmUaw14olOI2YErnSTBN_t3ec-syEgh9LZCCsZY9uPZVtYuZJhiqUX46K0MLNZ01kVAl3YXsHnw9bCrQZvOEOPgzfNGB8xmUKqQ1OW-qR-SyRBZjh-AmO-4UVvnaVmnNoMVruFk-NSeC5Y1Evri7M4JSD90M0JSb_Z6ENfj5QfNW7g"
function TestEmployee() {
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

    function getAllEmployees() {
        console.log(customers);
        return customers.filter(customer => customer.role === "Employee" || customer.role === "Admin")
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
                    {getAllEmployees()}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default TestEmployee;