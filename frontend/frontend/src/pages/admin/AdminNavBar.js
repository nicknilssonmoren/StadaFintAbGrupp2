import React, {Component} from 'react';
import Header from "../static/Header";

class AdminNavBar extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={"container d-flex justify-content-evenly mt-5"}>
                    <a href={"/manageCustomer"} type="button">Hantera kunder</a>
                    <a href={"/manageEmployee"} type="button">Hantera Städare</a>
                    <a href={"/manageBooking"} type="button">Hantera bokningar</a>
                    <a href={"/"} type="button">Logga ut</a>
                </div>
            </div>
        );
    }
}

export default AdminNavBar;