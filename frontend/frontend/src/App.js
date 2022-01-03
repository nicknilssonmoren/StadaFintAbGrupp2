import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login'
import Header from './Header'
import AdminPage from "./AdminPage";
import Register from "./Register";

function App() {
    const [customers, setCustomers] = useState([])
    const [display, setDisplay] = useState([])

    /*useEffect(() => {
        fetch("http://localhost:8080/customers")
            .then(req => req.json())
            .then(json => setCustomers(json))
    }, [])*/
    useState()
    return (
        <div className="App w-100">
            <Header/>
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
