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
                    <NavLink to={"/bookings"} activeClassName={"active"} exact={true}
                             className={"customerlink"}>Boka Städning</NavLink>
                    <NavLink to={"/bookingHistory"} activeClassName={"active"} exact={true}
                             className={"customerlink"}>Historik</NavLink>
                    <NavLink to={"/showBookings"} activeClassName={"active"} exact={true}
                             className={"customerlink"}>Visa bokade städningar</NavLink>
                    <a href={"/"} type="button" className={"customerlink"}>Logga ut</a>
                </div>
            </div>
        );
    }
}

export default CustomerNavBar;