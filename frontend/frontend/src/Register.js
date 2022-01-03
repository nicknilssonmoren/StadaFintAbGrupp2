import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div className="justify-content-center d-flex">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-20 mt-3">
                            <label htmlFor="inputEmail4">Username</label>
                            <input className="form-control" id="inputEmail4" placeholder="Email" type="email"></input>
                        </div>
                        <div className="form-group col-md-20 mt-3">
                            <label htmlFor="inputPassword4">Password</label>
                            <input className="form-control" id="inputPassword4" placeholder="Password" type="password"></input>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="inputAddress">Address</label>
                        <input className="form-control" id="inputAddress" placeholder="1234 Main St" type="text"></input>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-20 mt-3">
                            <label htmlFor="inputCity">City</label>
                            <input className="form-control" id="inputCity" type="text"></input>
                        </div>
                        <div className="form-group col-md-20 mt-3">
                            <label htmlFor="inputState">State</label>
                            <input className="form-control" id="inputState" type="text"></input>
                        </div>
                        <div className="form-group col-md-20 mt-3">
                            <label htmlFor="inputZip">Zip</label>
                            <input className="form-control" id="inputZip" type="text"></input>
                        </div>
                    </div>
                    <a href={"#"}>
                        <button className="btn btn-primary mt-3" type="submit">Register</button>
                    </a>

                    <a href={"/"}>
                        <button className="btn btn-secondary mt-3" onclick="|window.location.href='/'|"
                                type="button">Home
                        </button>
                    </a>
                </form>
            </div>
        );
    }
}

export default Register;