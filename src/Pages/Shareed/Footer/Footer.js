import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <footer className="py-5 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/home" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">about</Link></li>
                <li className="nav-item"><Link to="/services" className="nav-link px-2 text-muted">services</Link></li>
                <li className="nav-item"><Link to="/doctors" className="nav-link px-2 text-muted">doctor</Link></li>
                <li className="nav-item"><Link to="/appoinment" className="nav-link px-2 text-muted">appointment</Link></li>
                </ul>
                <p className="text-center text-light">&copy; 2021 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Footer
