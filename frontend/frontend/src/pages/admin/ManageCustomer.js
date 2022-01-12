import React, {Component, useState} from 'react';
import AdminNavBar from "./AdminNavBar";

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDZmMzc1MjI0N2ZjZjk0Y2JlNWQyZDZiNTlmYThhMmJhYjFlYzIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhZGFmaW50LTRiZTM1IiwiYXVkIjoic3RhZGFmaW50LTRiZTM1IiwiYXV0aF90aW1lIjoxNjQxOTA1ODIyLCJ1c2VyX2lkIjoiUHNkMkFCRWhIR056VDZrNHlXS3lBV0lLcGd3MiIsInN1YiI6IlBzZDJBQkVoSEdOelQ2azR5V0t5QVdJS3BndzIiLCJpYXQiOjE2NDE5MDU4MjIsImV4cCI6MTY0MTkwOTQyMiwiZW1haWwiOiJ0ZXN0eUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdHlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.XZN44cFyZJrGIbPgYYW2Pb5IsPNCA5jNogvoKFMp1TwUPJKFOrTgVYdye8JclKT7XT7p7exUZqu_wFS9Idl9W8hP17a4vm0phV-Bw5vprztFx5VUJqOtFtGBOFZDvdhytaxbfocg0nOjjc-DMtvrrxxEoqyy7UvUjzDhjngVF8fX18gTKf33MrlGVwx5a7x4lp4Eo79qI1_-T_m8rKDzsjqdBRTxxyXm-1yd_sfbOgrJxP0yfHXDu8GxVG6_ZoZj5j4tEkQKFUtlLRNNYPaYSsOu20HWcfe9gZ7MiHghsuH_bM_3SFBfHw6ZHUnGR6ybis1dZeM1U8Dqlx_Gh_gzKA"

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
        const [customer, setCustomers] = useState([]);
        getAll()
            .then(me => console.log("HEJ"))
            .then(me => {arrayOfUsers.push(me)})
            .then(x => console.log(arrayOfUsers))



        return <div>
            <p>TESTTT</p>
            <p>{}</p>
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