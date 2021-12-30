import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [customers, setCustomers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/customers")
        .then(req => req.json())
        .then(json => setCustomers(json))
  },[])
  return (
      <div className="App">
        <h1>HEJ</h1>
        {customers.map(value =>
            <div>
              {value.name}
            </div>
        )}
      </div>
  );
}

export default App;
