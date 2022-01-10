import React, {Component} from 'react';
import EmployeeNavBar from "./EmployeeNavBar";

class Canceled extends Component {
    render() {
        return (
            <div>
                <EmployeeNavBar/>
                <div className={"d-flex justify-content-center pt-5"}>
                    <div className="list-group w-50">
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex px-auto justify-content-between">
                                <h5 className="mb-1">Bokning XXX har blivit avbokad</h5>
                                <small className="text-muted">1 days ago</small>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error mollitia natus
                                praesentium totam! Assumenda autem debitis doloremque earum enim ipsum iusto libero
                                molestias nemo numquam odit quaerat, veritatis, vero voluptatem.</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-1">Bokning YYY har blivit avbokad</h5>
                                <small className="text-muted">3 days ago</small>
                            </div>
                            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                                culpa, cupiditate dicta dolor ducimus, enim est facere ipsum labore, laudantium magni
                                neque obcaecati praesentium quam quo repudiandae saepe sunt voluptatum.</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Canceled;