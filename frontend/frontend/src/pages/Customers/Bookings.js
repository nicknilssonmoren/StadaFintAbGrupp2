import React, {useState} from 'react';
import CustomerNavBar from "./CustomerNavBar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Bookings() {
    const [date, setDate] = useState(new Date());

    return (<>
            <CustomerNavBar />
            <div className='app'>
                <br />
                <h1 className='text-center'>Boka</h1>
                <div className={"d-flex justify-content-center pt-5 calendar-container"}>
                    <Calendar onChange={setDate} value={date}/>
                </div>
                <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
                <div className={"d-flex justify-content-center pt-5"}>
                    <input placeholder={" Enter Email"}></input>
                </div>

                <div className={"d-flex justify-content-center pt-5"}>
                    <div className="form-check">
                        <input type={"radio"} name={"flexRadioDefault"} id={"flexRadioDefault1"}></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Basic Städning
                        </label>
                    </div>
                    <div className="form-check">
                        <input type={"radio"} name={"flexRadioDefault"} id={"flexRadioDefault1"}></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Topp städning
                        </label>
                    </div>
                    <div className="form-check">
                        <input type={"radio"} name={"flexRadioDefault"} id={"flexRadioDefault1"}></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Diamant städning
                        </label>
                    </div>
                    <div className="form-check">
                        <input type={"radio"} name={"flexRadioDefault"} id={"flexRadioDefault1"}></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Fönstertvätt
                        </label>
                    </div>
                </div>

                <div className={"d-flex justify-content-center pt-5"}>
                    <button>Boka</button>
                </div>



            </div>
        </>
    );
}

export default Bookings;