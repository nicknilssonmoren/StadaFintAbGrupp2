import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login'
import React from 'react';
import Register from "./pages/Register";
import Customer from "./pages/customer/Customer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/static/Layout";
import NoPage from "./pages/NoPage";
import Footer from "./pages/static/Footer";
import AdminPage from "./pages/admin/AdminPage";
import ManageCustomer from "./pages/admin/ManageCustomer";
import ManageEmployee from "./pages/admin/ManageEmployee";
import ManageBooking from "./pages/admin/ManageBooking";

function App() {
    return (
        <BrowserRouter>
            {/*<Header/> */}
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="customer" element={<Customer/>}/>
                    <Route path="admin" element={<AdminPage/>}/>
                    <Route path="managecustomer" element={<ManageCustomer/>}/>
                    <Route path="manageemployee" element={<ManageEmployee/>}/>
                    <Route path="managebooking" element={<ManageBooking/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>)
}

export default App;