import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login'
import React from 'react';
import Register from "./Register";
import Customer from "./pages/Customer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="customer" element={<Customer />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>)
}

export default App;