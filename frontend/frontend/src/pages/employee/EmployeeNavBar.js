import React, {Component} from 'react';
import Header from "../static/Header";
import {NavLink} from "react-router-dom";

class EmployeeNavBar extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={"container d-flex justify-content-evenly mt-3"}>
                    <NavLink to={"/cleaningbooked"} activeClassName={"active"} exact={true}
                             className={"adminlink"}>Accepterade tilldelade städningar </NavLink>
                    <NavLink to={"/acceptbooking"} activeClassName={"active"} exact={true}
                             className={"adminlink"}>Inkommande tilldelade städningar </NavLink>
                    <NavLink to={"/cleaningcancel"} activeClassName={"active"} exact={true}
                             className={"adminlink"}>Avbokade städningar</NavLink>
                    <NavLink to={"/cleaningdone"} activeClassName={"active"} exact={true}
                             className={"adminlink"}>Utförda städningar</NavLink>
                    <a href={"/"} type="button" className={"adminlink"}>Logga ut</a>
                </div>
            </div>
        );
    }
}

export default EmployeeNavBar;