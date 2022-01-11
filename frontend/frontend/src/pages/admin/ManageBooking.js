import React, {useState} from 'react';
import AdminNavBar from "./AdminNavBar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function ManageBooking() {
    const [date, setDate] = useState(new Date());

    return (<>
            <AdminNavBar />
            <div className='app'>
                <h1 className='text-center'>React Calendar</h1>
                <div className={"d-flex justify-content-center pt-5 calendar-container"}>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
            </div>
        </>
    );
}

export default ManageBooking;