import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <Link to="/customer">Customer</Link><br/>
                <Link to={"/admin"}>Admin</Link><br/>
                <Link to={"/customers"}>Customers</Link>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
