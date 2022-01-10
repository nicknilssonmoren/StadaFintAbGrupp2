import React, {Component} from 'react';
import CustomerNavBar from "./CustomerNavBar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

class Bookings extends Component {
    render() {
        return (
            <div>
                <CustomerNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default Bookings;