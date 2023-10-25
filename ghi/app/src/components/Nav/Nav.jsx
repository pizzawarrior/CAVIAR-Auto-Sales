import React from "react";
import { NavLink } from "react-router-dom";
import logo from './assets/caviar-logo.png'
import { LogoStyle } from "./style";


export default function Nav() {
    return (
       <nav className="navbar">
        <div className="container-fluid">

            <NavLink className="navbar-brand" to="/">
                Caviar
            </NavLink>

            <LogoStyle>
            <img src={logo} alt="caviar-logo" className="caviar-logo" />
            </LogoStyle>

            <button
                className="navbar-btn"
                type="button"
                >
                <span className="navbar-icon"></span>
            </button>

            <div className="navbar-list">
                <ul className="navbar-ul">
                    <li className="nav-item">
                        <NavLink
                        className="nav-link"
                        to="/sales"
                        >
                        Sales Department
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                        className="nav-link"
                        to="/service"
                        >
                        Service Department
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
       </nav>
    )
}
