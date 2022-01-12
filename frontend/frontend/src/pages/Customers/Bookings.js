import React, {useState} from 'react';
import CustomerNavBar from "./CustomerNavBar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {idToken} from "../idToken";

async function bookIt(date) {
    let dateForMe = date.toDateString();

    try {
        let email = document.getElementById("email")
        let rates = document.getElementsByName('cleaningChoice');
        let cleaningChoice;

        for (let i = 0; i < rates.length; i++) {
            if (rates[i].checked) {
                cleaningChoice = rates[i].value;
            }
        }


        console.log(email.value);
        console.log(dateForMe)
        console.log(cleaningChoice);


        const response = await fetch('http://localhost:8080/createBooking', {
            mode: 'cors', method: 'post', headers: {
                'Authorization': 'Bearer ' + idToken,
                "Content-type": 'application/json',
                "Access-Control-Allow-Origin": "http://localhost:8080/"
            }, body: JSON.stringify({
                "address": "Hårdkodad adress 1", "cleaningType": cleaningChoice, "customerEmail": email.value, "date": dateForMe,
                "documentId": email.value, "employeeEmail": "", "grade": ""
            })

        })
            //.then(json)
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });

        alert("Your booking has successfully been created.");
        //window.location = '/';
    } catch (e) {
        console.log(e);
        alert("Your booking failed, biatch");
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