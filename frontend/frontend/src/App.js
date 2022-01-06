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
import AdminNavBar from "./pages/admin/AdminNavBar";
import ManageCustomer from "./pages/admin/ManageCustomer";
import ManageEmployee from "./pages/admin/ManageEmployee";
import ManageBooking from "./pages/admin/ManageBooking";
import EmployeeNavBar from "./pages/employee/EmployeeNavBar";
import Booked from "./pages/employee/Booked";
import Canceled from "./pages/employee/Canceled";
import BookingsDone from "./pages/employee/BookingsDone";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="customer" element={<Customer/>}/>
                    <Route path="admin" element={<AdminNavBar/>}/>
                    <Route path="managecustomer" element={<ManageCustomer/>}/>
                    <Route path="manageemployee" element={<ManageEmployee/>}/>
                    <Route path="managebooking" element={<ManageBooking/>}/>
                    <Route path="employee" element={<EmployeeNavBar/>}/>
                    <Route path="cleaningbooked" element={<Booked/>}/>
                    <Route path="cleaningcancel" element={<Canceled/>}/>
                    <Route path="cleaningdone" element={<BookingsDone/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;