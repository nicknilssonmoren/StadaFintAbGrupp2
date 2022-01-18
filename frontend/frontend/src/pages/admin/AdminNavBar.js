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
                    <NavLink to={"/bookForCustomer"} className={"adminlink"}>Boka åt kund</NavLink>
                    <NavLink to={"/manageCustomer"} activeclassname={"active"}
                             className={"adminlink"}>Hantera kunder</NavLink>
                    <NavLink to={"/manageEmployee"} activeclassname={"active"}
                             className={"adminlink"}>Hantera anställda</NavLink>
                    <NavLink to={"/manageBooking"} activeclassname={"active"}
                             className={"adminlink"}>Hantera bokningar</NavLink>
                    <NavLink to={"/registerrole"} activeclassname={"active"}
                             className={"adminlink"}>Registrera</NavLink>
                    <a href={"/"} type="button" className={"adminlink"}>Logga ut</a>
                </div>
            </div>
        );
    }
}

export default AdminNavBar;