import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {
    render() {
        return (
            <div className={"d-flex justify-content-center pt-5"}>
                <form>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"></span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"></span>
                        <input type="password" className="form-control" placeholder="Password" aria-label="Password"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <form>
                        <div className={"dropdown"}>
                            <div className="justify-content-center d-flex form-group col-md-20 mt-3 mb-3">
                                <select accessKey="target" className="form-control" id="list" name="list">
                                    <option selected value="none">Choose...</option>
                                    <option value="/adminpage">Admin</option>
                                    <option value="/customerpage">Customer</option>
                                    <option value="/employeepage">Employee</option>
                                </select>
                            </div>
                        </div>
                        <div className={"d-flex justify-content-around"}>
                            <button type="button" className="col-md-4 btn btn-primary">Login
                            </button>
                            <button type="button" className="col-md-4 btn btn-secondary">Register
                            </button>
                        </div>
                    </form>
                </form>
            </div>
        );
    }
}

export default Login;