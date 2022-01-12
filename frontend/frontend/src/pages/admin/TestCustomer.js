import React, {useState, useEffect} from 'react';
import AdminNavBar from "./AdminNavBar";

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDZmMzc1MjI0N2ZjZjk0Y2JlNWQyZDZiNTlmYThhMmJhYjFlYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhZGFmaW50LTRiZTM1IiwiYXVkIjoic3RhZGFmaW50LTRiZTM1IiwiYXV0aF90aW1lIjoxNjQxOTI3MDI0LCJ1c2VyX2lkIjoiSmx2TFp1UEJhQU8yMHJsbHZ1Tk1oclNmYnJUMiIsInN1YiI6IkpsdkxadVBCYUFPMjBybGx2dU5NaHJTZmJyVDIiLCJpYXQiOjE2NDE5MjcwMjQsImV4cCI6MTY0MTkzMDYyNCwiZW1haWwiOiJ0ZXN0eUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdHlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.idSPk04gIwCeCThhGJd0BGof_tFBEgAAh19CPBDKxoHGXOvHUBMg1QNJVD-LYNSd5p7OhYlseII3i_f8LRLnB6nUQIjJDWW_CoZW4ivSiNcUqdAIK1WnEsUx8f8JXEXVLWIAnBzhZgo73nxu51LMQ2J0cr_Tq3gecHFlZZtAFsyGufGFYISzq5z7khqBstw9Wpx5tzLJwtGzecm-45RFYsvcxsir-FY4iyMoeclREjdIGZFTuTWtZsP3ZUqjPnfRvjeDkcVBeKHhh_S820rt55zlU_H1hMfeUutT0xd9v_yfAnrUHVAKNNcUKbWmSGJ_HM4vo-pgypcgkIw2Vq12og"
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

export default TestCustomer;