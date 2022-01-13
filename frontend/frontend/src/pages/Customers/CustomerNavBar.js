import React, {Component} from 'react';
import Header from "../static/Header";
import {NavLink} from 'react-router-dom'
import './CustomerNavBar.css'

class CustomerNavBar extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={"container d-flex justify-content-evenly mt-3"}>
                    <NavLink to={"/bookings"} activeclassname={"active"}
                             className={"customerlink"}>Boka Städning</NavLink>
                    <NavLink to={"/bookingHistory"} activeclassname={"active"}
                             className={"customerlink"}>Historik</NavLink>
                    <NavLink to={"/showBookings"} activeclassname={"active"}
                             className={"customerlink"}>Visa bokade städningar</NavLink>
                    <a href={"/"} type="button" className={"customerlink"}>Logga ut</a>
                </div>
            </div>
        );
    }
}

export default CustomerNavBar;