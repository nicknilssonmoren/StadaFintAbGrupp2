import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login'

function App() {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/customers")
            .then(req => req.json())
            .then(json => setCustomers(json))
    }, [])
    return (
        <div className="App w-100">
            <h1>HEJ</h1>
            <h2>hej från michelle</h2>
            {customers.map(value =>
                <div>
                    {value.name}
                </div>
            )}
            <Login/>
        </div>
    );
}

export default App;
