import React from 'react'
import "../styles/Nav.css";
import NavBar from "../components/NavBar";

const Header = () => {
    return (
        <div>
            <header>
                <div className="header-overlay"></div>
                <NavBar />
            </header>
        </div>
    )
}

export default Header
