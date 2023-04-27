import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/add-movie'>Add</NavLink>
                <NavLink to='/all-movies'>Movies</NavLink>
            </nav>
            <Outlet />
        </>  
    );
}

export default Layout;