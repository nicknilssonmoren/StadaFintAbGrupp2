import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import Header from "../static/Header";
import AdminNavBar from "./AdminNavBar";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDDBpYTJTladLYupRNWzFeB-9xdOVTFzpQ",
    authDomain: "stadafint-4be35.firebaseapp.com",
    databaseURL: "https://stadafint-4be35-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stadafint-4be35",
    storageBucket: "stadafint-4be35.appspot.com",
    messagingSenderId: "679439977501",
    appId: "1:679439977501:web:1d2aa173ac6634773b4af4",
    measurementId: "G-1WMLRLZFV0"
};

initializeApp(firebaseConfig);

const register = async values => {

    try {
        const {email, password, address, role} = values;
        console.log(email, password, role);
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
        const userId = userCredential.user.uid;
        console.log(idToken);

        const response = await fetch('http://localhost:8080/createCustomer', {
            mode: 'cors', method: 'post', headers: {
                'Authorization': 'Bearer ' + idToken,
                "Content-type": 'application/json',
                "Access-Control-Allow-Origin": "http://localhost:8080/"
            }, body: JSON.stringify({
                "address": address, "documentId": userId, "email": email, "role": role
            })

        })
            //.then(json)
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });

        alert("Your account has successfully been created.");
    } catch (e) {
        alert("Email is already in use.");
    }
}

class RegisterRole extends Component {

    state = {
        email: "", password: "", address: "", role: "",
    };

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <>
                <AdminNavBar/>
                <div className="justify-content-center d-flex pt-4">
                    <div>
                        <label>Email</label>
                        <div className="input-group mb-3">
                            <input name="email" type="text" className="form-control" placeholder="Email"
                                   aria-label="Username"
                                   aria-describedby="basic-addon1" onChange={this.handleChange}/>
                        </div>
                        <label>Password</label>
                        <div className="input-group mb-3">
                            <input name="password" type="password" className="form-control" placeholder="Password"
                                   aria-label="Password"
                                   aria-describedby="basic-addon1" onChange={this.handleChange}/>
                        </div>
                        <label>Address</label>
                        <div className="input-group mb-3">
                            <input name="address" type="text" className="form-control" placeholder="Adress"
                                   aria-label="Adress"
                                   aria-describedby="basic-addon1" onChange={this.handleChange}/>
                        </div>
                        <fieldset className={"pt-0"}>
                            <div className={"row"}>
                                <div className={"col-sm-14"}>
                                    <div className={"form-check"}>
                                        <input className="form-check-input" type="radio" name="role"
                                               id="Admin" value="Admin" onChange={this.handleChange}/>
                                        <label className="form-check-label" htmlFor="Admin">
                                            Admin
                                        </label>
                                    </div>
                                    <div className={"form-check"}>
                                        <input className="form-check-input" type="radio" name="role" id="Employee"
                                               value="Employee" onChange={this.handleChange}/>
                                        <label className="form-check-label" htmlFor="Employee">
                                            Employee
                                        </label>
                                    </div>
                                    <div className={"form-check"}>
                                        <input className="form-check-input" type="radio" name="role" id="Customer"
                                               value="Customer" onChange={this.handleChange}/>
                                        <label className="form-check-label" htmlFor="Customer">
                                            Customer
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <br/>
                        <button onClick={() => register(this.state)} id={"button"} type="button"
                                className="btn btn-primary">Register
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default RegisterRole;