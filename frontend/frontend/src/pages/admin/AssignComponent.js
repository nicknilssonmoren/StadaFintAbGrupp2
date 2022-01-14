import React, {useEffect, useState} from 'react';
import AdminNavBar from "./AdminNavBar";
import 'react-calendar/dist/Calendar.css';
import {idToken} from "../idToken";
import {Dropdown} from "react-bootstrap";

export default function AssignComponent() {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}