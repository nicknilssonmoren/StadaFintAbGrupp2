import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login'
import Register from "./pages/Register";
import Customer from "./pages/customer/Customer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/static/Layout";
import NoPage from "./pages/NoPage";
import Header from "./pages/static/Header";
import Footer from "./pages/static/Footer";
import LoginTest from "./pages/static/LoginTest";
import MyPage from "./pages/static/MyPage";

function App() {
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="mypage" element={<MyPage />} />
                <Route path="logintest" element={<LoginTest />} />
                <Route path="customer" element={<Customer />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>)
}

export default App;