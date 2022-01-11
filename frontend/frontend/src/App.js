import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login'
import Register from "./pages/Register";
import GetCustomerMall from "./pages/Backend Mall/GetCustomerMall";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/static/Layout";
import NoPage from "./pages/NoPage";
import Footer from "./pages/static/Footer";
import MyPage from "./pages/static/MyPage";
import AdminNavBar from "./pages/admin/AdminNavBar";
import ManageCustomer from "./pages/admin/ManageCustomer";
import ManageEmployee from "./pages/admin/ManageEmployee";
import ManageBooking from "./pages/admin/ManageBooking";
import EmployeeNavBar from "./pages/employee/EmployeeNavBar";
import Booked from "./pages/employee/Booked";
import Canceled from "./pages/employee/Canceled";
import BookingsDone from "./pages/employee/BookingsDone";
import CustomerNavBar from "./pages/Customers/CustomerNavBar";
import Bookings from "./pages/Customers/Bookings";
import BookingHistory from "./pages/Customers/BookingHistory";
import ShowBookings from "./pages/Customers/ShowBookings";
import TestCustomer from "./pages/admin/TestCustomer";
import TestEmployee from "./pages/admin/TestEmployee";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="customer" element={<GetCustomerMall/>}/>
                    <Route path="admin" element={<AdminNavBar/>}/>
                    <Route path="mypage" element={<MyPage />} />
                    <Route path="managecustomer" element={<ManageCustomer/>}/>
                    <Route path="testCustomer" element={<TestCustomer />}/>
                    <Route path="manageemployee" element={<ManageEmployee/>}/>
                    <Route path="testEmployee" element={<TestEmployee />}/>
                    <Route path="managebooking" element={<ManageBooking/>}/>
                    <Route path="employee" element={<EmployeeNavBar/>}/>
                    <Route path="cleaningbooked" element={<Booked/>}/>
                    <Route path="cleaningcancel" element={<Canceled/>}/>
                    <Route path="cleaningdone" element={<BookingsDone/>}/>
                    <Route path="Customers" element={<CustomerNavBar/>}/>
                    <Route path="bookings" element={<Bookings/>}/>
                    <Route path="bookingHistory" element={<BookingHistory/>}/>
                    <Route path="showBookings" element={<ShowBookings/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )

}

export default App;