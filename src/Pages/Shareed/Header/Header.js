import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import logo from '../../../images/logo.png'

const Header = () => {
    const { user, logOut} = useAuth();
    return (
        <div className="container sticky-top">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-1 border-bottom">
            <Link to="/home" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={logo} alt=""/>Bd Healthcare
            </Link>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/home" className="nav-link px-2 link-secondary">Home</Link></li>
                <li><Link to="/about" className="nav-link px-2 link-dark">About</Link></li>
                <li><Link to="/services" className="nav-link px-2 link-dark">Services</Link></li>
                <li><Link to="/doctors" className="nav-link px-2 link-dark">Doctors</Link></li>
                <li><Link to="/appoinment" className="nav-link px-2 link-dark">Appoinment</Link></li>
                <div className="text-end">
                    {user.email ?
                        <button onClick={logOut} type="button" className="btn btn-primary mx-4">LogOut</button>:
                        <Link to="/login" type="button" className="btn btn-outline-primary me-2">Login</Link>}
                     <button type="button" className="btn btn-primary">User Name : {user.displayName}</button>
                </div>
            </ul>
            </header>
        </div>
    )
}

export default Header
