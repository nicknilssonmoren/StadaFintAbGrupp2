import React, {Component} from 'react';
import EmployeeNavBar from "./EmployeeNavBar";

class BookingsDone extends Component {
    render() {
        return (
            <div>
                <EmployeeNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <ul className="list-group w-50">
                        <li className="list-group-item list-group-item-success">Bokning XXX godkänd</li>
                        <li className="list-group-item list-group-item-danger">Bokning YYY icke godkänd</li>
                        <li className="list-group-item list-group-item-success">Bokning XXX godkänd</li>
                        <li className="list-group-item list-group-item-success">Bokning XXX godkänd</li>
                        <li className="list-group-item list-group-item-success">Bokning XXX godkänd</li>
                        <li className="list-group-item list-group-item-success">Bokning XXX godkänd</li>
                        <li className="list-group-item list-group-item-success">Bokning XXX godkänd</li>
                        <li className="list-group-item list-group-item-success">Bokning XXX godkänd</li>
                        <li className="list-group-item list-group-item-danger">Bokning YYY icke godkänd</li>
                        <li className="list-group-item list-group-item-danger">Bokning YYY icke godkänd</li>
                        <li className="list-group-item list-group-item-danger">Bokning YYY icke godkänd</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BookingsDone;