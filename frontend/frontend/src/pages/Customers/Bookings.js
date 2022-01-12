import React, {useState} from 'react';
import CustomerNavBar from "./CustomerNavBar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

function bookIt (date) {
    let dateForMe = date;

    try {
        let email = document.getElementById("email")
        //let myChoice = document.querySelector('input[name="cleaningChoice"]:checked').value;

        let rates = document.getElementsByName('cleaningChoice');
        let rate_value;
        for(let i = 0; i < rates.length; i++){
            if(rates[i].checked){
                rate_value = rates[i].value;
            }
        }


        console.log(email.value);
        console.log(dateForMe.toDateString())
        console.log(rate_value);


        // const response = await fetch('http://localhost:8080/createBooking', {
        //     mode: 'cors', method: 'post', headers: {
        //         'Authorization': 'Bearer ' + idToken,
        //         "Content-type": 'application/json',
        //         "Access-Control-Allow-Origin": "http://localhost:8080/"
        //     }, body: JSON.stringify({
        //         "address": address, "documentId": userId, "email": email, "role": "Customer"
        //     })
        //
        // })
        //     //.then(json)
        //     .then(function (data) {
        //         console.log('Request succeeded with JSON response', data);
        //     })
        //     .catch(function (error) {
        //         console.log('Request failed', error);
        //     });
        //
        // alert("Your account has successfully been created.");
        // window.location = '/';
    } catch (e) {
        alert("Email is already in use.");
    }
}


function Bookings() {
    const [date, setDate] = useState(new Date());

    return (<>
            <CustomerNavBar />
            <div className='app'>
                <br />
                <h1 className='text-center'>Boka</h1>
                <div className={"d-flex justify-content-center pt-5 calendar-container"}>
                    <Calendar onChange={setDate} value={date} id={"dateForMe"}/>
                </div>
                <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
                <div className={"d-flex justify-content-center pt-5"}>
                    <input placeholder={" Enter Email"} id={"email"}/>
                </div>

                <form className={"d-flex justify-content-center pt-5"} id={"myChoice"}>
                    <div className="form-check">
                        <input type={"radio"} name={"cleaningChoice"} id={"basic"} value={"basic"}/>
                        <label className="form-check-label" htmlFor="basic">
                            Basic Städning
                        </label>
                    </div>
                    <div className="form-check">
                        <input type={"radio"} name={"cleaningChoice"} id={"topp"} value={"topp"}/>
                        <label className="form-check-label" htmlFor="topp">
                            Topp städning
                        </label>
                    </div>
                    <div className="form-check">
                        <input type={"radio"} name={"cleaningChoice"} id={"diamant"} value={"diamant"}/>
                        <label className="form-check-label" htmlFor="diamant">
                            Diamant städning
                        </label>
                    </div>
                    <div className="form-check">
                        <input type={"radio"} name={"cleaningChoice"} id={"fonster"} value={"fonster"}/>
                        <label className="form-check-label" htmlFor="fonster">
                            Fönstertvätt
                        </label>
                    </div>
                </form>

                <div className={"d-flex justify-content-center pt-5"}>
                    <button onClick={() => bookIt(date)} id={"button"} type="button"
                            className="btn btn-primary">Boka
                    </button>
                </div>

                <div id="result"></div>

            </div>
        </>
    );
}

export default Bookings;