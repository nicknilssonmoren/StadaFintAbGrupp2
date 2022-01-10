import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {initializeApp} from "firebase/app";
import {signInWithEmailAndPassword, getIdToken, getAuth} from "firebase/auth";
import Header from "./static/Header";

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
    const { email, password } = values;
    console.log(email, password);
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    const response = await fetch('http://localhost:8080/me', {
        headers: {
            'Authorization': 'Bearer ' + idToken
        }
    });
    window.location = '/mypage';
    const me = await response.json();
    console.log(me);
}

class Login extends Component {

    state = {
        email: "",
        password: ""
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div >
                <Header/>
                <div className="justify-content-center d-flex">
                    <label>Email</label>
                    <input name="email" type="text" onChange={this.handleChange} />
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.handleChange} />
                    <button onClick={ () => login(this.state)} id={"button"}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;