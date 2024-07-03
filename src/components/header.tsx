import { Link, Outlet } from "react-router-dom";

function Header(){
    return(
        <>
        <h2>Header Part</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Outlet />
        </>
    );
}

export default Header