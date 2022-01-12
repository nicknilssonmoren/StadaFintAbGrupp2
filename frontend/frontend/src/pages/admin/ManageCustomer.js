import React, {Component, useState} from 'react';
import AdminNavBar from "./AdminNavBar";

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDZmMzc1MjI0N2ZjZjk0Y2JlNWQyZDZiNTlmYThhMmJhYjFlYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhZGFmaW50LTRiZTM1IiwiYXVkIjoic3RhZGFmaW50LTRiZTM1IiwiYXV0aF90aW1lIjoxNjQxODk2NDA1LCJ1c2VyX2lkIjoiZXdqblFBaDZLM2JXSlM3aHZ0Z0lEQjFYa2g3MiIsInN1YiI6ImV3am5RQWg2SzNiV0pTN2h2dGdJREIxWGtoNzIiLCJpYXQiOjE2NDE4OTY0MDUsImV4cCI6MTY0MTkwMDAwNSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdDFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.WC-0CtIT30Hn2JDLnUHBe9Z6ariHr83tYzXCONIxBylGbpZ36aIqgPlXwI38e4RSDL7MysB2C-KacSKUdWcOSXmp3m-fO5AxmiNJFbMvtF20MTHf8OrywaL6sPacm3Vt5e4tsfDx20UDLqyGV2tutl6efZx4wFcVxpUSNtIN1bgXzdOKLYH2B5Pv1myyqJbSoO6rQM5MnWsE5Rahp4EH1RozGKxE_3jURiBvxS5GgJNgncPHzud0Hh4WyycAkObc-mFD0cuRsOJ7qFjfwhuqGexNFWbUBS1FBSvagHbbEgLQ24k29_cgpt4HX_4SIKg4Wzkcv-40UiY19hFqLZo0sQ"

async function getAll() {
    const response = await fetch('http://localhost:8080/getAllCustomers', {
        headers: {
            'Authorization': 'Bearer ' + idToken
        }
    });
    const me = await response.json()
    arrayOfUsers = await me;
    return me;

}

let arrayOfUsers;
//console.log(arrayOfUsers);

class ManageCustomer extends Component {
    _renderUsers = () => () => {
        const [customer ,setCustomers]=useState([]);
        getAll()
            .then(me => console.log(me))
            .then(me => setCustomers(me))

        return <div>
            {customer}
        </div>
    }
    render() {

        const MyInlineHook = this._renderUsers();

        //console.log(arrayOfUsers)

        return (<>
            <div><MyInlineHook /></div>
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
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        );
    }
}

export default ManageCustomer;