import React from "react";
import Logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="https://github.com"><img className="fwbLogo" src={Logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://github.com">home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com">about</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="https://github.com">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com">how work</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="https://github.com">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com">contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
