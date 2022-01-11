import React, {Component, useState, useEffect} from 'react';
import AdminNavBar from "./AdminNavBar";

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDZmMzc1MjI0N2ZjZjk0Y2JlNWQyZDZiNTlmYThhMmJhYjFlYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhZGFmaW50LTRiZTM1IiwiYXVkIjoic3RhZGFmaW50LTRiZTM1IiwiYXV0aF90aW1lIjoxNjQxOTA4OTkxLCJ1c2VyX2lkIjoiVzRsVXdDNlNDaWdEajlDdHFRZW5oSXFSVGFnMiIsInN1YiI6Ilc0bFV3QzZTQ2lnRGo5Q3RxUWVuaElxUlRhZzIiLCJpYXQiOjE2NDE5MDg5OTEsImV4cCI6MTY0MTkxMjU5MSwiZW1haWwiOiJoZWhlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJoZWhlQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ad4dfrqDUGafwul_i4r6WxF8F98yrH_Zw3zA-e0DlWPXJsbxHwXgvzfDiHwvuK0LeeaV5NBNH6RRnV9T2MRvbPbMzac2qfvdHNiG0YfTZmp6bKx2KqJo3Vn60ZGkjMUTgfuy2SzhyforScx_qoVf_XwuWNJ-8GLdnSfikt53GlptKlVMyihzCUq20I9U-0XqscFIO3gsYHY5iwoiOVqXQXgFI-_WtPGCIqCIjKigLSsXUWezrLTFvEynpKlrRMjQW9v03sEzYP-eIIytzAMlJ6f7ZtA8Ourv5N1CPofCm0DWKhFVdjIlOx29BSKPmxXooMt0zOdXchqYKct9fZP8MQ"

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
                    <tr>
                        <th scope="row">{customers[1].documentId}</th>
                        <td>{customers[1].email}</td>
                        <td>{customers[1].address}</td>
                    </tr>
                    <tr>
                        <th scope="row">{customers[2].documentId}</th>
                        <td>{customers[2].email}</td>
                        <td>{customers[2].address}</td>
                    </tr>
                    <tr>
                        <th scope="row">{customers[3].documentId}</th>
                        <td>{customers[3].email}</td>
                        <td>{customers[3].address}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>);
}

export default TestCustomer;