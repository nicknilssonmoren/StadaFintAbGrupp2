import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from "firebase/compat/app";

class LoginTest extends Component {
    render() {
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

            // Initialize Firebase
            const app = firebase.initializeApp(firebaseConfig);

        function login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value)
                .catch(function (error) {
                    console.log(error)
                }).then(() => {
                firebase.auth().currentUser.getIdToken().then(token => {
                    fetch('http://localhost:8080/me', {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    }).then(response => response.json().then(me => console.log(me)))
                })
            });
        }

        return (
            <div>
                <label>Email</label>
                <input id="email" type="text"/>
                <label>Password</label>
                <input id="password" type="password"/>
                <button onClick={login()}>Login</button>
            </div>
        );
    }
}

export default LoginTest;