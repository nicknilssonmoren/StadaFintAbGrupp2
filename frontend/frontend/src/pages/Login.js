import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

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

const login = async values => {
    console.log(values);
    const {email, password} = values;
    console.log(email, password);
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    const response = await fetch('http://localhost:8080/me', {
        headers: {
            'Authorization': 'Bearer ' + idToken
        }
    });
    const me = await response.json();
    console.log(me.role);
    switch (me.role) {
        case "Customer":
            window.location = '/customers';
            break;
        case "Employee":
            window.location = '/employee';
            break;
        case "Admin":
            window.location = '/admin';
            break;
        default:
            window.location = '/';
    }

}

class Login extends Component {

    state = {
        email: "",
        password: ""
    };

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <>
                <h3 className="justify-content-center d-flex">Login</h3>
                <div className="justify-content-center d-flex">
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
                                   aria-label="Username"
                                   aria-describedby="basic-addon1" onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <button onClick={() => login(this.state)} id={"button"} type="button"
                                className="btn btn-primary">Login
                        </button>
                        <br/>
                        <br/>
                        <p>Dont have an account yet? <a href={"/register"}> Register</a></p>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;