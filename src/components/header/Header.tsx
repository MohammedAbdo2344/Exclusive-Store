import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './header.css'
import { useSelector } from 'react-redux';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header() {
    const cartItems = useSelector(state => state.cart.cart)
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <NavLink
                        to="/"
                        className="d-inline-flex link-body-emphasis text-decoration-none navbar-brand"
                        style={{
                            color: "#d73333"
                        }}>
                        Exclusive
                    </NavLink>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" >
                    <li>
                        <NavLink to="/" className="nav-link px-2">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-link px-2">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-link px-2">
                            About
                        </NavLink>
                    </li>
                </ul>
                <div className="col-md-3 text-end">
                    <NavLink to="/cart" className="nav-link px-2" z>
                        <FontAwesomeIcon icon={faCartShopping} /> {cartItems.length}
                    </NavLink>
                </div>
            </header>
        </div>
    )
}

export default Header