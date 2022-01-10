import React, {Component} from 'react';
import AdminNavBar from "./AdminNavBar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

class ManageBooking extends Component {
    render() {
        return (
            <div>
                <AdminNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default ManageBooking;