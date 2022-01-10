import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {initializeApp} from "firebase/app";
import {getIdToken, getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Route} from "react-router-dom";

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
        console.log(values);
        const {email, password} = values;
        console.log(email, password);
        const auth = getAuth();
        console.log(auth);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
        console.log(idToken);
        console.log(userCredential);
        alert("Your account has successfully been created.");
        window.location = '/logintest';
    }
    catch (e){
        alert("Email is already in use.");
    }


}

class LoginTest extends Component {

    state = {
        email: "",
        password: ""
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="justify-content-center d-flex">
                <div>
                    <label>Email</label>
                    <input name="email" type="text" onChange={this.handleChange} />
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.handleChange} />
                    <button onClick={ () => register(this.state)} id={"button"}>register</button>
                </div>
            </div>
        );
    }
}

export default LoginTest;