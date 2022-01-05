import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login'
import React, {useEffect} from 'react';
import Register from "./pages/Register";
import Customer from "./pages/customer/Customer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/static/Layout";
import NoPage from "./pages/NoPage";
import Header from "./pages/static/Header";
import Footer from "./pages/static/Footer";
import AuthContext from './contexts/AuthContext';
import { useState, useContext } from 'react';
import {auth} from "./utils/firebase";

function App() {
    const [isAuthenticated, setAuthentication] = useState(useContext(AuthContext));

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            user ?
                setAuthentication(true) :
                setAuthentication(false);
            unsubscribe(); // terminate the observer after completion
        });
    }, []);

    return(
        <AuthContext.Provider value={[isAuthenticated, setAuthentication]}>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="customer" element={<Customer />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
        </AuthContext.Provider>)
}

export default App;