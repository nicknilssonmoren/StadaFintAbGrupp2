import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <Link to="/customer">Customer</Link>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
