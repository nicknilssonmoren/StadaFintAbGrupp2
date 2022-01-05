import React, {Component} from 'react';
import Navigationbar from "../static/Navigationbar";

class AdminPage extends Component {
    render() {
        return (
            <div>
                <Navigationbar/>
                <div className={"container d-flex justify-content-evenly mt-5"}>
                    <a href={"/admin"} type="button" className="btn btn-primary">Mina sidor</a>
                    <a href={"/manageCustomer"} type="button" className="btn btn-primary">Hantera kunder</a>
                    <a href={"/manageEmployee"} type="button" className="btn btn-primary">Hantera Städare</a>
                    <a href={"/manageBooking"} type="button" className="btn btn-primary">Hantera bokningar</a>
                </div>
            </div>
        );
    }
}

export default AdminPage;