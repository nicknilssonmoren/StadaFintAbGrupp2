import React, {Component} from 'react';
import EmployeeNavBar from "./EmployeeNavBar";

class AcceptBooking extends Component {
    render() {
        return (
            <div>
                <EmployeeNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <div className="list-group w-50">
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex px-auto justify-content-between">
                                <h5 className="mb-1">Bokning XXX har blivit tilldelad</h5>
                                <small className="text-muted">1 days ago</small>
                            </div>
                            <p>Vänligen acceptera eller neka den tilldelade städningen.</p>
                            <div className={"d-flex justify-content-end gap-3"}>
                                <button type="button" className="btn btn-success mr-1">Acceptera</button>
                                <button type="button" className="btn btn-danger">Neka</button>
                            </div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-1">Bokning YYY har blivit tilldelad</h5>
                                <small className="text-muted">3 days ago</small>
                            </div>
                            <p>Vänligen acceptera eller neka den tilldelade städningen.</p>
                            <div className={"d-flex justify-content-end gap-3"}>
                                <button type="button" className="btn btn-success mr-1">Acceptera</button>
                                <button type="button" className="btn btn-danger">Neka</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AcceptBooking;