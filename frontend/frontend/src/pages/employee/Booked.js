import React, {Component} from 'react';
import EmployeeNavBar from "./EmployeeNavBar";

class Booked extends Component {
    render() {
        return (
            <div>
                <EmployeeNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <div className="list-group w-50">
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex px-auto justify-content-between">
                                <h5 className="mb-1">Bokning XXX har blivit bokad</h5>
                                <small className="text-muted">2 days ago</small>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error mollitia natus
                                praesentium totam! Assumenda autem debitis doloremque earum enim ipsum iusto libero
                                molestias nemo numquam odit quaerat, veritatis, vero voluptatem.</p>
                            <div className={"d-flex justify-content-end"}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Utförd
                                    </label>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-1">Bokning YYY har blivit bokad</h5>
                                <small className="text-muted">3 days ago</small>
                            </div>
                            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                                culpa, cupiditate dicta dolor ducimus, enim est facere ipsum labore, laudantium magni
                                neque obcaecati praesentium quam quo repudiandae saepe sunt voluptatum.</p>
                            <div className={"d-flex justify-content-end"}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                           id="flexCheckDefault-1"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Utförd
                                    </label>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Booked;