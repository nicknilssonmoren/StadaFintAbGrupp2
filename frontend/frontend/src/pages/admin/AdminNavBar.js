import React, {Component} from 'react';
import Header from "../static/Header";
import {NavLink} from 'react-router-dom'
import './AdminNavBar.css'

class AdminNavBar extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={"container d-flex justify-content-evenly mt-3"}>
                    <NavLink to={"/manageCustomer"} activeClassName={"active"} exact={true} className={"adminlink"}>Hantera
                        kunder</NavLink>
                    <NavLink to={"/manageEmployee"} activeClassName={"active"} exact={true}
                             className={"adminlink"}>Hantera anställda</NavLink>
                    <NavLink to={"/manageBooking"} activeClassName={"active"} exact={true}
                             className={"adminlink"}>Hantera bokningar</NavLink>
                    <a href={"/"} type="button" className={"adminlink"}>Logga ut</a>
                </div>
            </div>
        );
    }
}

export default AdminNavBar;